import { ClassSerializerInterceptor, INestApplication } from "@nestjs/common";
import { Reflector } from "@nestjs/core";

export const setNestAppInterceptors = <T extends INestApplication>(app: T): void => {
  /**
   * 객체 직렬화를 위한 인터셉터
   */
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
};
