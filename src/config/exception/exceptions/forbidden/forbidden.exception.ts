import { CustomException } from "../../impl/custom.exception";
import { HttpStatus } from "@nestjs/common";

export class ForbiddenException extends CustomException {
  constructor(errorCode: string, message: string) {
    super(errorCode, HttpStatus.FORBIDDEN, message);
  }
}
