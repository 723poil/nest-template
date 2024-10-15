import { isEmpty } from "class-validator";
import { IsolationLevel, Kysely } from "kysely";
import { transactionStorage } from "src/core/async-local-storage/transaction.storage";
import { UnhandledException } from "src/core/exception/exceptions/internal-server-error/Impl/unhandled.exception";
import { CustomException } from "src/core/exception/impl/custom.exception";
import {
  KYSELY_TRANSACTION_APPLY_MANAGER,
  KYSELY_TRANSACTION_MANAGER,
} from "src/core/async-local-storage/transaction.const";
import { DB } from "src/kysely/types";
import { exceptionHandler } from "src/utils/exception.handler";

export function Transactional(options?: { transactionLevel?: IsolationLevel; error?: CustomException }) {
  return function (_target: object, _propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) {
    const originMethod = descriptor.value;

    async function transactionWrapped(...args: unknown[]) {
      const store = transactionStorage.getStore();

      if (isEmpty(store)) {
        throw new UnhandledException(
          "서버 에러가 발생하였습니다.",
          `${KYSELY_TRANSACTION_MANAGER}-store is not active`,
        );
      }

      const isApplied: boolean = store.get(KYSELY_TRANSACTION_APPLY_MANAGER) as boolean;

      if (isApplied) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        return originMethod.apply(this, args);
      }

      const connection: Kysely<DB> = store.get(KYSELY_TRANSACTION_MANAGER) as Kysely<DB>;

      if (isEmpty(connection)) {
        throw new UnhandledException(
          "서버 에러가 발생하였습니다.",
          `${KYSELY_TRANSACTION_MANAGER}-connection is not active`,
        );
      }

      return await connection
        .transaction()
        .setIsolationLevel(options?.transactionLevel ?? "serializable")
        .execute(async (tx) => {
          store.set(KYSELY_TRANSACTION_MANAGER, tx);
          store.set(KYSELY_TRANSACTION_APPLY_MANAGER, true);

          try {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            return await originMethod.apply(this, args);
          } catch (error) {
            exceptionHandler(error, options.error ?? new UnhandledException());
          }
        });
    }

    descriptor.value = transactionWrapped;
  };
}
