import { unauthorizedConst } from "src/core/exception/const/unauthorized.const";
import { UnauthorizedException } from "../unauthorized.exception";

export class InvalidCredentialException extends UnauthorizedException {
  constructor(message: string = "아이디 및 비밀번호가 맞지 않습니다.", stack?: string) {
    super(unauthorizedConst.INVALID_CREDENTIAL, message, stack);
  }
}
