import { CustomException } from "../../impl/custom.exception";
import { HttpStatus } from "@nestjs/common";

export class NotFoundException extends CustomException {
  constructor(errorCode: string, message: string) {
    super(errorCode, HttpStatus.NOT_FOUND, message);
  }
}
