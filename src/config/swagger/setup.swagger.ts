import { INestApplication } from "@nestjs/common";
import process from "process";
import { ConfigService } from "@nestjs/config";
import expressBasicAuth from "express-basic-auth";
import { DocumentBuilder, SwaggerDocumentOptions, SwaggerModule } from "@nestjs/swagger";

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
  const config: DocumentBuilder = new DocumentBuilder().setTitle(`샵체인`).setDescription(`Shopchain API description`).setVersion("1.0").addBearerAuth().addSecurityRequirements("bearer");

  const options: SwaggerDocumentOptions = {
    ignoreGlobalPrefix: false,
  };

  const document = SwaggerModule.createDocument(app, config.build(), options);
  SwaggerModule.setup(`swagger`, app, document);
};
