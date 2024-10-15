import { VersioningType } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { setNestAppInterceptors } from "./core/interceptors/setup.interceptor";
import { winstonLogger } from "./core/logger/winston.logger";
import { setNestAppPipes } from "./core/pipe/setup.pipe";
import { setNestSwagger } from "./core/swagger/setup.swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: winstonLogger,
  });

  app.enableCors({
    origin: "*",
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
    preflightContinue: false,
    maxAge: 86400,
    credentials: true,
  });

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
