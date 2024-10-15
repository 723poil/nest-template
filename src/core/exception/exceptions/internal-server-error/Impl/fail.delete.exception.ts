import { InternalServerException } from "../internal.server.exception";
import { internalServerErrorConst } from "../../../const/internal.server.error.const";

export class FailDeleteException extends InternalServerException {
  constructor(message: string = "데이터를 삭제하지 못했습니다.") {
    super(internalServerErrorConst.FAIL_DELETE, message);
  }
}
