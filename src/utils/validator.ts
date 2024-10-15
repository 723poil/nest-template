import { ConfigService } from "@nestjs/config";
import { isEmpty } from "class-validator";
import { InvalidPasswordException } from "src/core/exception/exceptions/bad-request/impl/invalid.password.exception";
import { decode } from "./decode";
import { encode } from "./encode";

export const passwordValidator = (configService: ConfigService) => {
  const verify = (pwd: string): string => {
    pwd = decode(configService).aes(pwd);

    if (isEmpty(pwd) || pwd.length < 8) {
      throw new InvalidPasswordException();
    }

    if (!/[A-Za-z]/.test(pwd)) {
      throw new InvalidPasswordException();
    }

    if (!/\d/.test(pwd)) {
      throw new InvalidPasswordException();
    }

    if (!/[!@&$#%]/.test(pwd)) {
      throw new InvalidPasswordException();
    }

    return encode().sha(pwd);
  };

  return {
    verify,
  };
};
