import { Injectable, NestMiddleware } from "@nestjs/common";
import { Kysely } from "kysely";
import { asyncLocalStorage } from "src/core/async-local-storage/async.local.storage";
import { BaseComponent } from "src/core/base/base.component";
import { KyselyService } from "src/core/database/kysely.service";
import { UnhandledException } from "src/core/exception/exceptions/internal-server-error/Impl/unhandled.exception";
import { DB } from "src/kysely/types";
import { v4 as uuidv4 } from "uuid";
import { STORAGE_CONST } from "../../async-local-storage/storage.const";

@Injectable()
export class StorageMiddleware extends BaseComponent implements NestMiddleware {
  private readonly db: Kysely<DB>;

  constructor(private readonly kyselyService: KyselyService) {
    super();
    this.db = this.kyselyService.DB;
  }

  use(req: any, res: any, next: (error?: Error | any) => void) {
    if (process.env.MODE !== "test") {
      this.debug("Hit");
    }

    asyncLocalStorage.run(new Map(), () => {
      if (process.env.MODE !== "test") {
        this.debug(`Run AsyncLocalStorage`);
      }

      this.setConnection();
      next();
    });
  }

  private setConnection() {
    const store = asyncLocalStorage.getStore();
    if (store) {
      const uuid: string = uuidv4().replace(/-/g, "");

      store.set(STORAGE_CONST.KYSELY_TRANSACTION_MANAGER, this.db);
      store.set(STORAGE_CONST.KYSELY_TRANSACTION_APPLY_MANAGER, false);
      store.set(STORAGE_CONST.UUID_MANAGER, uuid);

      if (process.env.MODE !== "test") {
        this.debug(`Set connection in AsyncLocalStorage`);
      }
    } else {
      if (process.env.MODE !== "test") {
        this.error(`AsyncLocalStorage store is not available`);
      }
      throw new UnhandledException();
    }
  }
}
