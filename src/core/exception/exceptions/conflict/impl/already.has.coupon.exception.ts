import { conflictConst } from "src/core/exception/const/conflict.const";
import { ConflictException } from "../conflict.exception";

export class AlreadyHasCouponException extends ConflictException {
  constructor(message: string = "이미 발급 받은 쿠폰이 있어요.") {
    super(conflictConst.ALREADY_HAS_COUPON, message);
  }
}
