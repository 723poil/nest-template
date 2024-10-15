import { Injectable } from "@nestjs/common";
import { isEmpty } from "class-validator";
import { Kysely } from "kysely";
import { KYSELY_TRANSACTION_MANAGER } from "src/core/async-local-storage/transaction.const";
import { transactionStorage } from "src/core/async-local-storage/transaction.storage";
import { UnhandledException } from "src/core/exception/exceptions/internal-server-error/Impl/unhandled.exception";
import { KyselyService } from "./kysely.service";
import { DB } from "src/kysely/types";

@Injectable()
export class BaseRepository {
  protected readonly kdb: Kysely<DB>;

  constructor(private readonly kyselyService: KyselyService) {
    this.kdb = this.kyselyService.DB;
  }

  protected db() {
    const store = transactionStorage.getStore();

    if (isEmpty(store)) {
      throw new UnhandledException("서버 에러가 발생하였습니다.", `${KYSELY_TRANSACTION_MANAGER}-store is not active`);
    }

    const connection: Kysely<DB> = (store.get(KYSELY_TRANSACTION_MANAGER) as Kysely<DB>) ?? this.kdb;

    if (isEmpty(connection)) {
      throw new UnhandledException(
        "서버 에러가 발생하였습니다.",
        `${KYSELY_TRANSACTION_MANAGER}-connection is not active`,
      );
    }

    return connection;
  }
}
