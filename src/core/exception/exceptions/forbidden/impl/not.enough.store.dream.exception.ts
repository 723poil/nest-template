import { forbiddenConst } from "src/core/exception/const/forbidden.const";
import { ForbiddenException } from "../forbidden.exception";

export class NotEnoughStoreDreamException extends ForbiddenException {
  constructor(
    message: string = "상점의 지급 코인이 부족하여 현재 주문을 받을 수 없습니다.\n주문을 진행하려면 해당 상점에 문의해주시길 바랍니다.",
  ) {
    super(forbiddenConst.NOT_ENOUGH_STORE_DREAM, message);
  }
}
