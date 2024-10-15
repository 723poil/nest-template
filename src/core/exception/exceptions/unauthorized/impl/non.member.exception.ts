import { unauthorizedConst } from "src/core/exception/const/unauthorized.const";
import { UnauthorizedException } from "../unauthorized.exception";

export class NonMemberException extends UnauthorizedException {
  constructor(message: string = "회원가입이 필요한 번호입니다.") {
    super(unauthorizedConst.NON_MEMBER, message);
  }
}
