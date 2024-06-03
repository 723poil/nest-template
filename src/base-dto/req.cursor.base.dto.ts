import { IsInt, Min } from "class-validator";

export class ReqCursorBaseDto {
  @IsInt()
  @Min(1)
  limit: number;
}
