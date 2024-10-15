import { InternalServerException } from "../internal.server.exception";
import { internalServerErrorConst } from "../../../const/internal.server.error.const";

export class FailChangeException extends InternalServerException {
  constructor(message: string = "변경 내용을 저장하지 못했습니다.") {
    super(internalServerErrorConst.FAIL_CHANGE, message);
  }
}
