import { forbiddenConst } from "src/core/exception/const/forbidden.const";
import { ForbiddenException } from "../forbidden.exception";

export class NotEnoughStampToHandOutException extends ForbiddenException {
  constructor(message: string = "친구에게 나눠줄 스탬프가 충분치 않습니다.") {
    super(forbiddenConst.NOT_ENOUGH_STAMP_TO_HAND_OUT, message);
  }
}
