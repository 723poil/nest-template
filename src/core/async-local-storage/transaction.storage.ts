import { AsyncLocalStorage } from "async_hooks";
import { Kysely } from "kysely";
import { DB } from "src/kysely/types";

export const transactionStorage: AsyncLocalStorage<Map<string, Kysely<DB> | boolean>> = new AsyncLocalStorage<
  Map<string, Kysely<DB> | boolean>
>();
