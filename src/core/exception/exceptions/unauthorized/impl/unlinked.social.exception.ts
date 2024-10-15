import { unauthorizedConst } from "src/core/exception/const/unauthorized.const";
import { UnauthorizedException } from "../unauthorized.exception";

export class OtherLinkedSocialException extends UnauthorizedException {
  constructor(message: string = "해당 소셜로 이미 연동되어있는 계정입니다.") {
    super(unauthorizedConst.OTHER_LINKED, message);
  }
}
