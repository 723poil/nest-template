import { InternalServerException } from "../internal.server.exception";
import { internalServerErrorConst } from "../../../const/internal.server.error.const";

export class FailPaymentException extends InternalServerException {
  constructor(
    message: string = "결제에 실패했습니다. 같은 문제가 반복된다면 카드사 또는 샵체인으로 문의해주시길 바랍니다.",
  ) {
    super(internalServerErrorConst.FAIL_PAYMENT, message);
  }
}
