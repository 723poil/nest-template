import { conflictConst } from "src/core/exception/const/conflict.const";
import { ConflictException } from "../conflict.exception";

export class AlreadyRegisteredException extends ConflictException {
  constructor(message: string = "이미 회원가입이 완료된 계정입니다.") {
    super(conflictConst.ALREADY_REGISTERED, message);
  }
}
