import { conflictConst } from "src/core/exception/const/conflict.const";
import { ConflictException } from "../conflict.exception";

export class StoreClosedException extends ConflictException {
  constructor(message: string = "상점 주문 가능 시간이 아닙니다.") {
    super(conflictConst.STORE_CLOSED, message);
  }
}
