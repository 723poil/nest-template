import { badRequestConst } from "src/core/exception/const/bad.request.const";
import { BadRequestException } from "../bad.request.exception";

export class UnsatisfiedCouponConditionException extends BadRequestException {
  constructor(message: string = "사용하려는 쿠폰의 조건에 맞지 않아요.") {
    super(badRequestConst.UNSATISFIED_COUPON_CONDITION, message);
  }
}
