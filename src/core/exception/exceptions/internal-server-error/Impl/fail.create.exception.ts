import { InternalServerException } from "../internal.server.exception";
import { internalServerErrorConst } from "../../../const/internal.server.error.const";

export class FailCreateException extends InternalServerException {
  constructor(message: string = "데이터를 저장하지 못했습니다.") {
    super(internalServerErrorConst.FAIL_CREATE, message);
  }
}
