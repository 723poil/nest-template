import { INestApplication } from "@nestjs/common";
import process from "process";
import { ConfigService } from "@nestjs/config";
import expressBasicAuth from "express-basic-auth";
import { DocumentBuilder, SwaggerDocumentOptions, SwaggerModule } from "@nestjs/swagger";
import { formatDtm } from "src/utils/date.conversion";
import { SwaggerTheme, SwaggerThemeNameEnum } from "swagger-themes";

export const setNestSwagger = <T extends INestApplication>(app: T): void => {
  const configService: ConfigService = app.get(ConfigService);
  /**
   * 스웨거 접속 시 로그인 설정
   * tsconfig.json - esModuleInterop : true 설정 필요
   */
  if (process.env.MODE === "prod") {
    return;
  }

  if (process.env.MODE !== "local") {
    app.use(
      [`/swagger`],
      expressBasicAuth({
        users: {
          shopchain: configService.get<string>("SWAGGER_PWD"),
        },
        challenge: true,
      }),
    );
  }

  /**
   * 스웨거 설정
   */
  const config: DocumentBuilder = new DocumentBuilder()
    .setTitle(`nest-template`)
    .setDescription(`nest-template API description ${formatDtm()}`)
    .setVersion("1.0")
    .addBearerAuth()
    .addSecurityRequirements("bearer");

  const options: SwaggerDocumentOptions = {
    ignoreGlobalPrefix: false,
  };

  const document = SwaggerModule.createDocument(app, config.build(), options);

  const theme = new SwaggerTheme();
  // 시스템 설정에 따라 다크모드 설정
  const themeDarkOptions = {
    customCss: theme.getBuffer(SwaggerThemeNameEnum.ONE_DARK),
  };

  SwaggerModule.setup(`swagger`, app, document, {
    swaggerOptions: { defaultModelsExpandDepth: -1 },
  });
};
