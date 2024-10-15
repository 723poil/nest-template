import { NotFoundException } from "../not.found.exception";
import { notFoundConst } from "../../../const/not.found.const";

export class NoFranchiseBrandException extends NotFoundException {
  constructor(message: string = "프랜차이즈 브랜드가 없습니다.") {
    super(notFoundConst.NO_FRANCHISE_BRAND, message);
  }
}
