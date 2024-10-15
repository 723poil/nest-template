import { notFoundConst } from "src/core/exception/const/not.found.const";
import { NotFoundException } from "../not.found.exception";

export class NoCouponException extends NotFoundException {
  constructor(message: string = "쿠폰 정보를 불러오다가 실패했어요.") {
    super(notFoundConst.NO_COUPON, message);
  }
}
