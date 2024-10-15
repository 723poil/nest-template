import { HttpStatus } from "@nestjs/common";
import { CustomException } from "../../impl/custom.exception";

export class GoneException extends CustomException {
  constructor(errorCode: string, message: string) {
    super(errorCode, HttpStatus.GONE, message);
  }
}
