import { unauthorizedConst } from "src/core/exception/const/unauthorized.const";
import { UnauthorizedException } from "../unauthorized.exception";

export class ProblemInSocialLoginException extends UnauthorizedException {
  constructor(message: string = "provider") {
    super(unauthorizedConst.PROBLEM_IN_SOCIAL_LOGIN, `[${message}] 로부터 정보 요청중에 문제가 발생하였습니다.`);
  }
}
