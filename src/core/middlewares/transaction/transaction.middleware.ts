import { Injectable, NestMiddleware } from "@nestjs/common";
import { Kysely } from "kysely";
import { transactionStorage } from "src/core/async-local-storage/transaction.storage";
import { KyselyService } from "src/core/database/kysely.service";
import { UnhandledException } from "src/core/exception/exceptions/internal-server-error/Impl/unhandled.exception";
import { winstonLogger } from "src/core/logger/winston.logger";
import { DB } from "src/kysely/types";
import {
  KYSELY_TRANSACTION_MANAGER,
  KYSELY_TRANSACTION_APPLY_MANAGER,
} from "../../async-local-storage/transaction.const";

@Injectable()
export class TransactionMiddleware implements NestMiddleware {
  private readonly db: Kysely<DB>;

  constructor(private readonly kyselyService: KyselyService) {
    this.db = this.kyselyService.DB;
  }

  use(req: any, res: any, next: (error?: Error | any) => void) {
    if (process.env.MODE !== "test") {
      winstonLogger.debug("[MIDDLEWARE] Hit TransactionMiddleware");
    }

    transactionStorage.run(new Map(), () => {
      if (process.env.MODE !== "test") {
        winstonLogger.debug(`[MIDDLEWARE] AsyncLocalStorage Run`);
      }

      this.setConnection();
      next();
    });
  }

  private setConnection() {
    const store = transactionStorage.getStore();
    if (store) {
      store.set(KYSELY_TRANSACTION_MANAGER, this.db);
      store.set(KYSELY_TRANSACTION_APPLY_MANAGER, false);

      if (process.env.MODE !== "test") {
        winstonLogger.debug(`[MIDDLEWARE] Connection set in AsyncLocalStorage`);
      }
    } else {
      if (process.env.MODE !== "test") {
        winstonLogger.error(`[MIDDLEWARE] AsyncLocalStorage store is not available`);
      }
      throw new UnhandledException();
    }
  }
}
