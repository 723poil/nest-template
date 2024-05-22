import { Injectable, NestMiddleware } from "@nestjs/common";
import { winstonLogger } from "../../../config/logger/winton.logger";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(request: Request, response: Response, next: NextFunction): void {
    const { ip, method, originalUrl } = request;
    const userAgent = request.get("user-agent") || "";

    if (!originalUrl.endsWith("metrics")) {
      winstonLogger.log(`${method}:Req ${originalUrl} - ${userAgent} ${ip}`);
    }

    response.on("finish", () => {
      const { statusCode } = response;
      const contentLength = response.get("content-length");

      if (statusCode >= 400 && statusCode < 500) {
        winstonLogger.warn(`${method}:Res ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip}`);
      } else if (statusCode >= 500) {
        winstonLogger.error(`${method}:Res ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip}`);
      } else {
        if (!originalUrl.endsWith("metrics")) {
          winstonLogger.log(`${method}:Res ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip}`);
        }
      }
    });

    next();
  }
}
