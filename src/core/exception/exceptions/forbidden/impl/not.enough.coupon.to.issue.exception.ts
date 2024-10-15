import { forbiddenConst } from "src/core/exception/const/forbidden.const";
import { ForbiddenException } from "../forbidden.exception";

export class NotEnoughCouponToIssueException extends ForbiddenException {
  constructor(message: string = "발급가능한 쿠폰이 소진돼서 발급받을 수 없어요.") {
    super(forbiddenConst.NOT_ENOUGH_COUPON_TO_ISSUE, message);
  }
}
