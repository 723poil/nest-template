import { CustomException } from "../../impl/custom.exception";
import { HttpStatus } from "@nestjs/common";

export class UnauthorizedException extends CustomException {
  constructor(errorCode: string, message: string, stack?: string) {
    super(errorCode, HttpStatus.UNAUTHORIZED, message, stack);
  }
}
