import { CustomException } from "src/core/exception/impl/custom.exception";
import { winstonLogger } from "../core/logger/winston.logger";
import { logger } from "src/core/logger/logger";

export const exceptionHandler = (tag: string, error: unknown, newException: CustomException): void => {
  if (error instanceof CustomException) {
    throw error;
  }

  if (process.env.MODE !== "test") {
    logger(tag).error(error);
  }

  throw newException;
};
