import { badRequestConst } from "src/core/exception/const/bad.request.const";
import { BadRequestException } from "../bad.request.exception";

export class MissingReqItemException extends BadRequestException {
  constructor(reqItems: string[]) {
    super(
      badRequestConst.MISSING_REQ_ITEM,
      process.env.MODE !== "prod"
        ? `조건을 충족하지 못하는 값이 있습니다. (${reqItems.join(" or ")})`
        : "요청값이 조건을 만족하지 않아요. 다시 한 번 확인해주세요!",
    );
  }
}
