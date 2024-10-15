import { goneConst } from "src/core/exception/const/gone.const";
import { GoneException } from "../gone.exception";

export class ExpiredCodeException extends GoneException {
  constructor(message: string = "인증번호가 만료되었습니다.") {
    super(goneConst.EXPIRED_CODE, message);
  }
}
