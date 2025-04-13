import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { BaseComponent } from "src/core/base/base.component";

@Injectable()
export class LoggerMiddleware extends BaseComponent implements NestMiddleware {
  use(request: Request, response: Response, next: NextFunction): void {
    const { ip, method, originalUrl } = request;
    const userAgent = request.get("user-agent") || "";

    const startTime: number = new Date().getTime();

    if (!originalUrl.endsWith("metrics") && process.env.MODE !== "test") {
      this.info(`${method}:Req ${originalUrl} - ${userAgent} ${ip}`);
    }

    response.on("finish", () => {
      const elapsedTime: string = ((new Date().getTime() - startTime) / 1000).toFixed(3) + "s";
      const { statusCode } = response;
      const contentLength = response.get("content-length");

      const message: string = `${method}:Res ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip} elapsedTime: ${elapsedTime}`;

      if (process.env.MODE === "test") return;

      if (originalUrl.endsWith("metrics")) return;

      if (statusCode >= 500) {
        this.error(message);
        return;
      }

      if (statusCode >= 400) {
        this.warn(message);
        return;
      }

      this.info(message);
    });

    next();
  }
}
