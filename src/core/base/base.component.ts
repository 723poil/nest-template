import { logger, Logger } from "../logger/logger";

export class BaseComponent {
  protected tag: string;
  protected logger: Logger;

  constructor() {
    this.tag = this.constructor.name;
    this.logger = logger(this.tag);
  }

  protected info(message: any) {
    this.logger.info(message);
  }

  protected warn(message: any) {
    this.logger.warn(message);
  }

  protected debug(message: any) {
    this.logger.debug(message);
  }

  protected error(message: any) {
    this.logger.error(message);
  }
}
