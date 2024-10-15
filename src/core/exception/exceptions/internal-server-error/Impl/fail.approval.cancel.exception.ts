import { InternalServerException } from "../internal.server.exception";
import { internalServerErrorConst } from "../../../const/internal.server.error.const";

export class FailApprovalCancelException extends InternalServerException {
  constructor(message: string = "결제사로부터 승인 취소 요청이 거부되었습니다.") {
    super(internalServerErrorConst.FAIL_APPROVAL_CANCEL, message);
  }
}
