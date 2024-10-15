import { conflictConst } from "src/core/exception/const/conflict.const";
import { ConflictException } from "../conflict.exception";

export class AlreadyGiftAllIssuableCouponException extends ConflictException {
  constructor(message: string = "해당 쿠폰의 나눠주기 횟수를 초과해서 더이상 나눠줄 수 없어요.") {
    super(conflictConst.ALREADY_GIFT_ALL_ISSUABLE_COUPON, message);
  }
}
