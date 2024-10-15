import { ApiProperty } from "@nestjs/swagger";

export class BaseResponseDto {
  @ApiProperty({ description: "api 실행 결과", example: true })
  result: boolean;

  @ApiProperty({ description: "실행 결과 메세지", example: "성공하였습니다." })
  message: string;

  @ApiProperty({ description: "결과값" })
  data?: any;

  static success<T, S extends BaseResponseDto>(param: { data?: T; message?: string }): S {
    return {
      result: true,
      message: param.message ?? "요청을 성공했어요.",
      data: param.data,
    } as S;
  }

  static successNoData(message: string = "요청 성공하였습니다."): BaseResponseDto {
    return BaseResponseDto.success<undefined, BaseResponseDto>({ message });
  }
}
