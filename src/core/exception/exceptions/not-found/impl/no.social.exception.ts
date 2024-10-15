import { NotFoundException } from "../not.found.exception";
import { notFoundConst } from "../../../const/not.found.const";

export class NoSocialException extends NotFoundException {
  constructor(message: string = "provider", stack?: string) {
    super(notFoundConst.NO_SOCIAL, `[${message}]로 연동되어 있지 않습니다.`, stack);
  }
}
