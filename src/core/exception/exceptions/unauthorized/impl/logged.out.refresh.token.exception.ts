import { UnauthorizedException } from "../unauthorized.exception";
import { unauthorizedConst } from "src/core/exception/const/unauthorized.const";

export class LoggedOutRefreshTokenException extends UnauthorizedException {
  constructor(message: string = "로그아웃된 리프레쉬 토큰입니다.") {
    super(unauthorizedConst.LOGGED_OUT_REFRESH_TOKEN, message);
  }
}
