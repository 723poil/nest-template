import { badRequestConst } from "src/core/exception/const/bad.request.const";
import { BadRequestException } from "../bad.request.exception";

export class InvalidAuthCodeTypeException extends BadRequestException {
  constructor(message: string = "잘못된 인증 타입입니다.") {
    super(badRequestConst.INVALID_AUTH_CODE_TYPE, message);
  }
}
