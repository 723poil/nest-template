import { AsyncLocalStorage } from "async_hooks";
import { isEmpty } from "class-validator";
import { Kysely } from "kysely";
import { DB } from "src/kysely/types";
import { STORAGE_CONST } from "./storage.const";

export const asyncLocalStorage: AsyncLocalStorage<Map<string, Kysely<DB> | boolean | string>> = new AsyncLocalStorage<
  Map<string, Kysely<DB> | boolean | string>
>();

export const getStore = () => {
  return asyncLocalStorage.getStore();
};

export const getUuid = (): string => {
  const store = getStore();

  if (isEmpty(store)) return undefined;

  return (store.get(STORAGE_CONST.UUID_MANAGER) as string) ?? undefined;
};
