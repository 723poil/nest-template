import { HttpModule } from "@nestjs/axios";
import { Global, MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { APP_FILTER, APP_INTERCEPTOR } from "@nestjs/core";
import { LoggerMiddleware } from "src/core/middlewares/logger/logger.middleware";
import { DatabaseModule } from "./database/database.module";
import { PrometheusInterceptor } from "./interceptors/prometheus/prometheus.interceptor";
import { AllExceptionFilter } from "./filters/exception/exception.filter";
import { TransactionMiddleware } from "./middlewares/transaction/transaction.middleware";

const configModule = ConfigModule.forRoot({
  isGlobal: true,
  envFilePath: `${process.env.MODE}.env`,
});

const httpModule = {
  ...HttpModule.register({
    timeout: 5000,
    maxRedirects: 5,
  }),
  global: true,
};

const modules = [configModule, DatabaseModule, httpModule];
const providers = [
  { provide: APP_INTERCEPTOR, useClass: PrometheusInterceptor },
  { provide: APP_FILTER, useClass: AllExceptionFilter },
];

@Global()
@Module({
  imports: [...modules],
  providers: [...providers],
})
export class CoreModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware, TransactionMiddleware).forRoutes("*");
  }
}
