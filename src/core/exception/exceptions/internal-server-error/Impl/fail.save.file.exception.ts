import { InternalServerException } from "../internal.server.exception";
import { internalServerErrorConst } from "../../../const/internal.server.error.const";

export class FailSaveFileException extends InternalServerException {
  constructor(message: string = "파일 저장에 실패하였습니다.") {
    super(internalServerErrorConst.FAIL_SAVE_FILE, message);
  }
}
