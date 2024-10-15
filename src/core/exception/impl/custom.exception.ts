import { HttpException } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { ICustomException } from "../i.custom.exception";
import { formatYmdHisKo } from "src/utils/date.conversion";
import { isEmpty } from "class-validator";

export class CustomException extends HttpException implements ICustomException {
  constructor(errorCode: string, statusCode: number, message: string, stack?: string) {
    super(errorCode, statusCode);
    this.errorCode = errorCode;
    this.statusCode = statusCode;
    this.message = message;
    this.stack = stack;
  }

  @ApiProperty()
  errorCode: string;

  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  message: string;

  @ApiProperty()
  data: any;

  public setData(data: any): CustomException {
    this.data = data;
    return this;
  }

  public toRes(path: string, message?: string) {
    return {
      errorCode: this.errorCode,
      statusCode: this.statusCode,
      message: isEmpty(message) ? this.message : message,
      timestamp: formatYmdHisKo(),
      path: path,
      data: this.data,
    };
  }
}
