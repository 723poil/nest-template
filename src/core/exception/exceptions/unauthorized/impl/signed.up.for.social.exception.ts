import { unauthorizedConst } from "src/core/exception/const/unauthorized.const";
import { UnauthorizedException } from "../unauthorized.exception";

export class SignedUpForSocialException extends UnauthorizedException {
  constructor(
    message: string = "소셜로 회원가입된 계정입니다. 일반 로그인을 사용하시려면 소셜 로그인 후 설정에서 비밀번호를 설정해주시길 바랍니다.",
    stack?: string,
  ) {
    super(unauthorizedConst.SIGNED_UP_FOR_SOCIAL, message, stack);
  }
}
