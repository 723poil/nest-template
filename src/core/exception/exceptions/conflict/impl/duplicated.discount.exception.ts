import { conflictConst } from "src/core/exception/const/conflict.const";
import { ConflictException } from "../conflict.exception";

export class DuplicatedDiscountException extends ConflictException {
  constructor(message: string = "할인 혜택이 중복으로 적용되었어요.") {
    super(conflictConst.DUPLICATED_DISCOUNT, message);
  }
}
