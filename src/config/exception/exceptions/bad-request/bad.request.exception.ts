import { CustomException } from "../../impl/custom.exception";
import { HttpStatus } from "@nestjs/common";

export class BadRequestException extends CustomException {
  constructor(errorCode: string, message: string) {
    super(errorCode, HttpStatus.BAD_REQUEST, message);
  }
}
