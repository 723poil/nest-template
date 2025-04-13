import { plainToInstance } from "class-transformer";
import { isEmpty, validateOrReject, ValidatorOptions } from "class-validator";
import { NoDataException } from "src/core/exception/exceptions/not-found/impl/no.data.exception";
import { Logger } from "src/core/logger/logger";
import { toCamelCase } from "./case.transform";

export async function transformAndValidate<T extends object>(
  cls: new () => T,
  plain: object[],
  options: {
    validator?: ValidatorOptions;
    error: boolean;
    logger: Logger;
  },
): Promise<T[]>;

export async function transformAndValidate<T extends object>(
  cls: new () => T,
  plain: object,
  options: {
    validator?: ValidatorOptions;
    error: boolean;
    logger: Logger;
  },
): Promise<T>;

export async function transformAndValidate<T extends object>(
  cls: new () => T,
  plain: object | object[],
  options: {
    validator?: ValidatorOptions;
    error: boolean;
    logger: Logger;
  },
): Promise<T | T[]> {
  if (options.error && isEmpty(plain)) {
    options.logger.error(`요청하신 데이터가 존재하지 않습니다. ${cls.name}`);
    throw new NoDataException();
  }

  if (isEmpty(plain)) return undefined;

  if (options.error && Array.isArray(plain) && plain.length === 0) {
    options.logger.error(`요청하신 데이터가 존재하지 않습니다. ${cls.name}`);
    throw new NoDataException();
  }

  if (Array.isArray(plain) && plain.length === 0) {
    return [];
  }

  const instance = plainToInstance(cls, toCamelCase<T>(plain));

  if (Array.isArray(instance)) {
    await Promise.all(instance.map((item) => validateOrReject(item, options.validator)));
  } else {
    await validateOrReject(instance, options.validator);
  }

  return instance;
}
