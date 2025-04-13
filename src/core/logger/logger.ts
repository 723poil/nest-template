import { getUuid } from "../async-local-storage/async.local.storage";
import { winstonLogger } from "./winston.logger";

export const logger = (tag: string): Logger => {
  const info = (message: any) => {
    winstonLogger.log(message, [`${getUuid()}`, `${tag}`]);
  };

  const warn = (message: any) => {
    winstonLogger.warn(message, [`${getUuid()}`, `${tag}`]);
  };

  const debug = (message: any) => {
    winstonLogger.debug(message, [`${getUuid()}`, `${tag}`]);
  };

  const error = (message: any) => {
    winstonLogger.error(`[${getUuid()}, ${tag}] ${message}`, message?.stack ?? undefined);
  };

  return {
    info,
    warn,
    debug,
    error,
  } as Logger;
};

export type Logger = {
  info: (message: any) => void;
  warn: (message: any) => void;
  debug: (message: any) => void;
  error: (message: any) => void;
};
