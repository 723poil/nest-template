import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Request } from "express";
import { Payload } from "src/auth/dto/payload";

export const PARSER_DECORATOR = {
  TOKEN: createParamDecorator((_: unknown, ctx: ExecutionContext): Payload => {
    const request: Request = ctx.switchToHttp().getRequest();
    const payload: Payload = <Payload>request.user;

    return payload;
  }),
};
