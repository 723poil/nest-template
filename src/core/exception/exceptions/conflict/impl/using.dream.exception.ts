import { conflictConst } from "src/core/exception/const/conflict.const";
import { ConflictException } from "../conflict.exception";

export class UsingDreamException extends ConflictException {
  constructor(message: string = "이미 사용중인 드림입니다.") {
    super(conflictConst.USING_DREAM, message);
  }
}
