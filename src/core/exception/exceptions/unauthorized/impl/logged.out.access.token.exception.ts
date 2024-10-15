import { unauthorizedConst } from "src/core/exception/const/unauthorized.const";
import { UnauthorizedException } from "../unauthorized.exception";

export class LoggedOutAccessTokenException extends UnauthorizedException {
  constructor(message: string = "로그아웃된 액세스 토큰입니다.") {
    super(unauthorizedConst.LOGGED_OUT_ACCESS_TOKEN, message);
  }
}
