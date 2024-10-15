import { notFoundConst } from "src/core/exception/const/not.found.const";
import { NotFoundException } from "../not.found.exception";

export class NoCouponIssuedException extends NotFoundException {
  constructor(message: string = "등록된 전화번호로 발행된 쿠폰정보가 없어요!") {
    super(notFoundConst.NO_COUPON_ISSUED, message);
  }
}
