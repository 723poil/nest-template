import "tsconfig-paths/register";
import { INestApplication, VersioningType } from "@nestjs/common";
import { APP_FILTER } from "@nestjs/core";
import { Test, TestingModule } from "@nestjs/testing";
import { AppController } from "src/app.controller";
import { AppService } from "src/app.service";
import { mockAuthGuard } from "./mock.auth.guard";
import { CoreModule } from "src/core/core.module";
import { AllExceptionFilter } from "src/core/filters/exception/exception.filter";
import { JwtAccessAuthGuard } from "src/core/guards/jwt.access.auth.guard";
import { setNestAppPipes } from "src/core/pipe/setup.pipe";

export default async (): Promise<void> => {
  const apiModule = [];
  const filters = [{ provide: APP_FILTER, useClass: AllExceptionFilter }];

  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [CoreModule, ...apiModule],
    controllers: [AppController],
    providers: [AppService, ...filters],
  })
    .overrideGuard(JwtAccessAuthGuard)
    .useValue(mockAuthGuard)
    .compile();

  const app: INestApplication = moduleFixture.createNestApplication();
  setNestAppPipes(app);

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: "1",
  });

  await app.init();

  global["testModule"] = moduleFixture;
  global["app"] = app;
};
