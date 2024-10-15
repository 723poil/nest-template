import { CustomException } from "../../impl/custom.exception";
import { HttpStatus } from "@nestjs/common";

export class InternalServerException extends CustomException {
  constructor(errorCode: string, message: string, stack?: string) {
    super(errorCode, HttpStatus.INTERNAL_SERVER_ERROR, message, stack);
  }
}
