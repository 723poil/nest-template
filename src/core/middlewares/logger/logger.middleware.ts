import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { winstonLogger } from "src/core/logger/winston.logger";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(request: Request, response: Response, next: NextFunction): void {
    const { ip, method, originalUrl } = request;
    const userAgent = request.get("user-agent") || "";

    const startTime: number = new Date().getTime();

    if (!originalUrl.endsWith("metrics") && process.env.MODE !== "test") {
      winstonLogger.log(`${method}:Req ${originalUrl} - ${userAgent} ${ip}`);
    }

    response.on("finish", () => {
      const elapsedTime: string = ((new Date().getTime() - startTime) / 1000).toFixed(3) + "s";
      const { statusCode } = response;
      const contentLength = response.get("content-length");

      if (process.env.MODE !== "test") {
        if (statusCode >= 400 && statusCode < 500) {
          winstonLogger.warn(
            `${method}:Res ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip} elapsedTime: ${elapsedTime}`,
          );
        } else if (statusCode >= 500) {
          winstonLogger.error(
            `${method}:Res ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip} elapsedTime: ${elapsedTime}`,
          );
        } else {
          if (!originalUrl.endsWith("metrics")) {
            winstonLogger.log(
              `${method}:Res ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip} elapsedTime: ${elapsedTime}`,
            );
          }
        }
      }
    });

    next();
  }
}
