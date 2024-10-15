import { forbiddenConst } from "src/core/exception/const/forbidden.const";
import { ForbiddenException } from "../forbidden.exception";

export class OnlyIssuableCouponInFranchiseException extends ForbiddenException {
  constructor(message: string = "프랜차이즈 쿠폰만 발급이 가능해요.") {
    super(forbiddenConst.ONLY_ISSUABLE_COUPON_IN_FRANCHISE, message);
  }
}
