import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { APP_FILTER, APP_INTERCEPTOR } from "@nestjs/core";
import { PrometheusInterceptor } from "./lifecycle/interceptor/prometheus/prometheus.interceptor";
import { LoggerMiddleware } from "./lifecycle/middleware/logger/logger.middleware";
import { AllExceptionFilter } from "./lifecycle/filter/exception/exception.filter";
import { DatabaseModule } from "./config/database/database.module";
import { UnitTestModule } from "./api/unit-test/unit-test.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.env.MODE}.env`,
    }),
    DatabaseModule,

    UnitTestModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: PrometheusInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: AllExceptionFilter,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes("*");
  }
}
