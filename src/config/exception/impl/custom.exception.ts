import { HttpException } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { CustomExceptionInterface } from "../custom.exception.interface";

export class CustomException extends HttpException implements CustomExceptionInterface {
  constructor(errorCode: string, statusCode: number, message: string) {
    super(errorCode, statusCode);
    this.errorCode = errorCode;
    this.statusCode = statusCode;
    this.message = message;
  }

  @ApiProperty()
  errorCode: string;

  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  message: string;
}
