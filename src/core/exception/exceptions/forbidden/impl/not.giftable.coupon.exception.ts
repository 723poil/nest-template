import { forbiddenConst } from "src/core/exception/const/forbidden.const";
import { ForbiddenException } from "../forbidden.exception";

export class NotGiftableCouponException extends ForbiddenException {
  constructor(message: string = "선물이 불가능한 쿠폰이에요.") {
    super(forbiddenConst.NOT_GIFTABLE_COUPON, message);
  }
}
