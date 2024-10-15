import { notFoundConst } from "../../../const/not.found.const";
import { NotFoundException } from "../not.found.exception";

export class NoStoreException extends NotFoundException {
  constructor(message: string = "상점 데이터가 존재하지 않습니다.") {
    super(notFoundConst.NO_STORE, message);
  }
}
