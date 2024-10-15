import { ApiProperty } from "@nestjs/swagger";

export class ResCursorDto {
  @ApiProperty({ description: "다음에 요청할 데이터의 유무" })
  hasNext: boolean;
}
