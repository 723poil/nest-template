import { ConfigService } from "@nestjs/config";
import { isNotEmpty } from "class-validator";
import cryptoJS from "crypto-js";
import crypto from "crypto";
import { isEmpty } from "lodash";

export const encode = (configService?: ConfigService) => {
  let key: string;

  if (isNotEmpty(configService)) {
    key = configService.get<string>("DECODE_KEY");
  }

  const aes = (value: string): string => {
    if (isEmpty(value)) {
      return "";
    }

    return cryptoJS.AES.encrypt(value, cryptoJS.enc.Utf8.parse(key), {
      iv: cryptoJS.enc.Utf8.parse(""),
      padding: cryptoJS.pad.Pkcs7,
      mode: cryptoJS.mode.CBC,
    }).toString();
  };

  const aesWithKey = (value: string, customKey: string): string => {
    if (isEmpty(value)) {
      return "";
    }

    return cryptoJS.AES.encrypt(value, cryptoJS.enc.Utf8.parse(customKey), {
      iv: cryptoJS.enc.Utf8.parse(""),
      padding: cryptoJS.pad.Pkcs7,
      mode: cryptoJS.mode.CBC,
    }).toString();
  };

  const sha = (value: string): string => {
    return cryptoJS.SHA256(value).toString();
  };

  const rs256 = (value: string, privateKey: string): string => {
    const sign = crypto.createSign("SHA256").update(value).end().sign(privateKey, "base64");

    return sign;
  };

  return {
    aes,
    sha,
    rs256,
    aesWithKey,
  };
};
