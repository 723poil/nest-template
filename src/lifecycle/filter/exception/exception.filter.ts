import { ArgumentsHost, Catch, ExceptionFilter, UnauthorizedException } from "@nestjs/common";
import { HttpArgumentsHost } from "@nestjs/common/interfaces";
import { formatYmdHisKo } from "../../../utils/date.conversion";
import { winstonLogger } from "../../../config/logger/winton.logger";
import { CustomException } from "../../../config/exception/impl/custom.exception";
import { Request, Response } from "express";
import { UnhandledException } from "../../../config/exception/exceptions/internal-server-error/Impl/unhandled.exception";

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  catch(exception: unknown | UnauthorizedException, host: ArgumentsHost): void {
    const ctx: HttpArgumentsHost = host.switchToHttp();
    const request: Request = ctx.getRequest();
    const response: Response = ctx.getResponse();

    const timestamp: string = formatYmdHisKo();
    const path: string = request.url;

    // 401
    // if (exception instanceof UnauthorizedException) {
    //   winstonLogger.error(exception);
    //
    //   exception = new ExpiredTokenException();
    // }

    // 400
    // if (exception instanceof BadRequestException) {
    //   winstonLogger.error(exception);
    //
    //   if (
    //     exception.message.startsWith(
    //       'Validation failed (expected size is less than 15000000)',
    //     )
    //   ) {
    //     exception = new ExceededVideoMaxSizeException();
    //   } else if (
    //     exception.message.startsWith(
    //       'Validation failed (expected size is less than 1000000)',
    //     )
    //   ) {
    //     exception = new ExceededImageMaxSizeException();
    //   } else {
    //     exception = new MissingReqItemException();
    //   }
    // }

    if (!(exception instanceof CustomException)) {
      winstonLogger.error(exception);
    }

    const res: CustomException = exception instanceof CustomException ? exception : new UnhandledException();

    winstonLogger.error(
      `${res.statusCode}(${res.errorCode}): ${res.message} ${path}, query: ${JSON.stringify(request.query)}, params: ${JSON.stringify(request.params)}, body: ${JSON.stringify(request.body)}`,
    );

    response.status(res.statusCode).json({
      errorCode: res.errorCode,
      statusCode: res.statusCode,
      message: res.message,
      timestamp: timestamp,
      path: path,
    });
  }
}
