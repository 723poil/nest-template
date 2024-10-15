import { conflictConst } from "src/core/exception/const/conflict.const";
import { ConflictException } from "../conflict.exception";

export class AlreadyLinkedException extends ConflictException {
  constructor(message: string = "이미 연동된 계정입니다.") {
    super(conflictConst.ALREADY_LINKED, message);
  }
}
