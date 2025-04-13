import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { isEmpty } from "class-validator";
import { Request } from "express";
import { MissingReqItemException } from "src/core/exception/exceptions/bad-request/impl/missing.req.item.exception";
import { InvalidCredentialException } from "src/core/exception/exceptions/unauthorized/impl/invalid.credential.exception";

export const CREDENTIAL_DECORATOR = {
  DECODE_AUTH_BASIC: createParamDecorator((_: unknown, ctx: ExecutionContext): string[] => {
    const request: Request = ctx.switchToHttp().getRequest();

    const encodedCredentials: string[] = request.header("Authorization").split(" ");

    if (encodedCredentials[0] !== "Basic" || encodedCredentials.length !== 2) {
      throw new InvalidCredentialException();
    }

    const decodedUserIdAndPassword: string[] = Buffer.from(encodedCredentials[1], "base64").toString("utf8").split(":");

    if (decodedUserIdAndPassword.length !== 2) {
      throw new InvalidCredentialException();
    }

    if (isEmpty(decodedUserIdAndPassword[0]) || isEmpty(decodedUserIdAndPassword[1])) {
      throw new MissingReqItemException(["id", "password"]);
    }

    return decodedUserIdAndPassword;
  }),

  DECODE_AUTH_LOGIN: createParamDecorator((_: unknown, ctx: ExecutionContext): string[] => {
    const request: Request = ctx.switchToHttp().getRequest();

    const encodedCredentials: string[] = request.header("Authorization").split(" ");

    if (encodedCredentials[0] !== "Basic" || encodedCredentials.length !== 2) {
      throw new InvalidCredentialException();
    }

    const decodedUserIdAndPasswordAndSaupNo: string[] = Buffer.from(encodedCredentials[1], "base64")
      .toString("utf8")
      .split(":");

    if (decodedUserIdAndPasswordAndSaupNo.length !== 3) {
      throw new InvalidCredentialException();
    }

    if (
      isEmpty(decodedUserIdAndPasswordAndSaupNo[0]) ||
      isEmpty(decodedUserIdAndPasswordAndSaupNo[1]) ||
      isEmpty(decodedUserIdAndPasswordAndSaupNo[2])
    ) {
      throw new MissingReqItemException(["id", "password", "saupNo"]);
    }

    return decodedUserIdAndPasswordAndSaupNo;
  }),
};
