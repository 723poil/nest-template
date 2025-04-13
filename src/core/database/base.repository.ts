import { Injectable } from "@nestjs/common";
import { isEmpty } from "class-validator";
import { Kysely } from "kysely";
import { asyncLocalStorage } from "src/core/async-local-storage/async.local.storage";
import { STORAGE_CONST } from "src/core/async-local-storage/storage.const";
import { UnhandledException } from "src/core/exception/exceptions/internal-server-error/Impl/unhandled.exception";
import { DB } from "src/kysely/types";
import { KyselyService } from "./kysely.service";

@Injectable()
export class BaseRepository {
  protected readonly kdb: Kysely<DB>;

  constructor(private readonly kyselyService: KyselyService) {
    this.kdb = this.kyselyService.DB;
  }

  protected db() {
    const store = asyncLocalStorage.getStore();

    if (isEmpty(store)) {
      throw new UnhandledException(
        "서버 에러가 발생하였습니다.",
        `${STORAGE_CONST.KYSELY_TRANSACTION_MANAGER}-store is not active`,
      );
    }

    const isTransactional: boolean = store.get(STORAGE_CONST.KYSELY_TRANSACTION_APPLY_MANAGER) as boolean;

    const connection: Kysely<DB> = isTransactional
      ? (store.get(STORAGE_CONST.KYSELY_TRANSACTION_MANAGER) as Kysely<DB>)
      : this.kdb;

    if (isEmpty(connection)) {
      throw new UnhandledException(
        "서버 에러가 발생하였습니다.",
        `${STORAGE_CONST.KYSELY_TRANSACTION_MANAGER}-connection is not active`,
      );
    }

    return connection;
  }
}
