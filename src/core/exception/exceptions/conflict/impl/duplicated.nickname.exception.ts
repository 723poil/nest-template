import { ConflictException } from "../conflict.exception";
import { conflictConst } from "../../../const/conflict.const";

export class DuplicatedNicknameException extends ConflictException {
  constructor(message: string = "중복된 닉네임입니다.") {
    super(conflictConst.DUPLICATED_NICKNAME, message);
  }
}
