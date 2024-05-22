import { CustomException } from "../../impl/custom.exception";
import { HttpStatus } from "@nestjs/common";

export class UnauthorizedException extends CustomException {
  constructor(errorCode: string, message: string) {
    super(errorCode, HttpStatus.UNAUTHORIZED, message);
  }
}
