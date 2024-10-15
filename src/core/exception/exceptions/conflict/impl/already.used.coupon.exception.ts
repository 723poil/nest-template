import { conflictConst } from "src/core/exception/const/conflict.const";
import { ConflictException } from "../conflict.exception";

export class AlreadyUsedCouponException extends ConflictException {
  constructor(message: string = "이미 사용한 쿠폰이에요.") {
    super(conflictConst.ALREADY_USED_COUPON, message);
  }
}
