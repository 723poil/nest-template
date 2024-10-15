import { notFoundConst } from "../../../const/not.found.const";
import { NotFoundException } from "../not.found.exception";

export class NoCustomerException extends NotFoundException {
  constructor(message: string = "요청하신 고객 데이터가 존재하지 않습니다.") {
    super(notFoundConst.NO_CUSTOMER, message);
  }
}
