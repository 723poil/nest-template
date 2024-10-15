import { notFoundConst } from "../../../const/not.found.const";
import { NotFoundException } from "../not.found.exception";

export class NoNoticeException extends NotFoundException {
  constructor(message: string = "존재하지 않은 공지사항압니다.") {
    super(notFoundConst.NO_NOTICE, message);
  }
}
