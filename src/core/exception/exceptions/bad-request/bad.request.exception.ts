import { HttpStatus } from "@nestjs/common";
import { CustomException } from "../../impl/custom.exception";

export class BadRequestException extends CustomException {
  constructor(errorCode: string, message: string) {
    super(errorCode, HttpStatus.BAD_REQUEST, message);
  }
}
