import { ConflictException } from "../conflict.exception";
import { conflictConst } from "../../../const/conflict.const";

export class DuplicatedAddressNameException extends ConflictException {
  constructor(message: string = "해당 별칭은 중복된 별칭이에요.") {
    super(conflictConst.DUPLICATED_ADDRESS_NAME, message);
  }
}
