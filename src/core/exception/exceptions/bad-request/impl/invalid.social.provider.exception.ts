import { badRequestConst } from "src/core/exception/const/bad.request.const";
import { BadRequestException } from "../bad.request.exception";

export class InvalidSocialProviderException extends BadRequestException {
  constructor(message: string = "잘못된 소셜정보입니다.") {
    super(badRequestConst.INVALID_SOCIAL_PROVIDER, message);
  }
}
