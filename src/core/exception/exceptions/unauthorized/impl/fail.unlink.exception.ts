import { unauthorizedConst } from "src/core/exception/const/unauthorized.const";
import { UnauthorizedException } from "../unauthorized.exception";

export class FailUnlinkException extends UnauthorizedException {
  constructor(message: string = "provider", stack?: string) {
    super(unauthorizedConst.FAIL_UNLINK, `[${message}] 로부터 연동 해제 요청중에 문제가 발생하였습니다.`, stack);
  }
}
