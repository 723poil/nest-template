import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { winstonLogger } from "./config/logger/winton.logger";
import { setNestAppInterceptors } from "./lifecycle/interceptor/setup.interceptor";
import { setNestAppPipes } from "./config/pipe/setup.pipe";
import { setNestSwagger } from "./config/swagger/setup.swagger";
import { VersioningType } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: winstonLogger,
  });

  app.enableCors();
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: "1",
  });

  setNestAppInterceptors(app);
  setNestAppPipes(app);
  setNestSwagger(app);

  await app.listen(process.env.PORT);
}

bootstrap();
