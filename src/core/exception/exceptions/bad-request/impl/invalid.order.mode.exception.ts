import { BadRequestException } from "../bad.request.exception";
import { badRequestConst } from "../../../const/bad.request.const";

export class InvalidOrderModeException extends BadRequestException {
  constructor(message: string = "잘못된 조회 순서 구분 정보입니다.") {
    super(badRequestConst.INVALID_ORDER_MODE, message);
  }
}
