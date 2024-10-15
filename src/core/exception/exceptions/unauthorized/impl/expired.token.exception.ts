import { unauthorizedConst } from "src/core/exception/const/unauthorized.const";
import { UnauthorizedException } from "../unauthorized.exception";

export class ExpiredTokenException extends UnauthorizedException {
  constructor(message: string = "만료된 토큰입니다.") {
    super(unauthorizedConst.EXPIRED_TOKEN, message);
  }
}
