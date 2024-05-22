import { InternalServerException } from "../internal.server.exception";
import { internalServerErrorConst } from "../../../const/internal.server.error.const";

export class UnhandledException extends InternalServerException {
  constructor(message: string = "서버 에러가 발생하였습니다.") {
    super(internalServerErrorConst.UnHandled, message);
  }
}
