import { ConfigService } from "@nestjs/config";
import { isEmpty } from "lodash";
import cryptoJS from "crypto-js";

export const decode = (configService: ConfigService) => {
  const key: string = configService.get<string>("DECODE_KEY");

  const aes = (value: string): string => {
    if (isEmpty(value)) {
      return "";
    }

    return cryptoJS.AES.decrypt(value, cryptoJS.enc.Utf8.parse(key), {
      iv: cryptoJS.enc.Utf8.parse(""),
      padding: cryptoJS.pad.Pkcs7,
      mode: cryptoJS.mode.CBC,
    }).toString(cryptoJS.enc.Utf8);
  };

  return {
    aes,
  };
};
