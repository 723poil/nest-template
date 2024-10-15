import { CustomException } from "src/core/exception/impl/custom.exception";
import { winstonLogger } from "../core/logger/winston.logger";

export const exceptionHandler = (error: unknown, newException: CustomException): void => {
  if (error instanceof CustomException) {
    throw error;
  }

  if (process.env.MODE !== "test") {
    winstonLogger.error(error);
  }

  throw newException;
};
