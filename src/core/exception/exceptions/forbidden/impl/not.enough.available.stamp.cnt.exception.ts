import { forbiddenConst } from "src/core/exception/const/forbidden.const";
import { ForbiddenException } from "../forbidden.exception";

export class NotEnoughAvailableStampCntException extends ForbiddenException {
  constructor(message: string = "현재 사용할 수 있는 스탬프 개수가 부족해요.") {
    super(forbiddenConst.NOT_ENOUGH_AVAILABLE_STAMP_CNT, message);
  }
}
