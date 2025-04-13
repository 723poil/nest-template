import { notFoundConst } from "src/core/exception/const/not.found.const";
import { ForbiddenException } from "../../forbidden/forbidden.exception";

export class NoDataException extends ForbiddenException {
  constructor(message: string = "요청하신 데이터가 존재하지 않습니다.") {
    super(notFoundConst.NO_DATA, message);
  }
}
