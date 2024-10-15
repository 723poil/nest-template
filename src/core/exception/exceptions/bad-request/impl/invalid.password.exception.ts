import { badRequestConst } from "src/core/exception/const/bad.request.const";
import { BadRequestException } from "../bad.request.exception";

export class InvalidPasswordException extends BadRequestException {
  constructor(
    message: string = "문자, 숫자, 특수문자(!, @, &, $, #, %) 를 적어도 하나 이상 포함하는 8자리 이상의 비밀번호를 사용하셔야 합니다.",
  ) {
    super(badRequestConst.INVALID_PASSWORD, message);
  }
}
