import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Payload } from "../../auth/dto/payload";
import { Request } from "express";

export const UserData = createParamDecorator((_: unknown, ctx: ExecutionContext): Payload => {
  const request: Request = ctx.switchToHttp().getRequest();
  const payload: Payload = <Payload>request.user;

  return <Payload>payload;
});
