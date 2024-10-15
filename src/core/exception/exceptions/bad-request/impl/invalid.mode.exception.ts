import { BadRequestException } from "../bad.request.exception";
import { badRequestConst } from "../../../const/bad.request.const";

export class InvalidModeException extends BadRequestException {
  constructor(message: string = "잘못된 설정 정보입니다.") {
    super(badRequestConst.INVALID_MODE, message);
  }
}
