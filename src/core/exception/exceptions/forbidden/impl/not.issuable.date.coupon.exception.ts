import { forbiddenConst } from "src/core/exception/const/forbidden.const";
import { ForbiddenException } from "../forbidden.exception";

export class NotIssuableDateCouponException extends ForbiddenException {
  constructor(message: string = "쿠폰 발급 가능한 날짜가 아니에요.") {
    super(forbiddenConst.NOT_ISSUABLE_DATE_COUPON, message);
  }
}
