import { InternalServerException } from "../internal.server.exception";
import { internalServerErrorConst } from "../../../const/internal.server.error.const";

export class FailApprovalException extends InternalServerException {
  constructor(message: string = "결제사로부터 승인 요청이 거부되었습니다.") {
    super(internalServerErrorConst.FAIL_APPROVAL, message);
  }
}
