import { applyDecorators, CanActivate, UseGuards } from "@nestjs/common";
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiOperationOptions,
  ApiResponse,
  ApiResponseNoStatusOptions,
  ApiResponseOptions,
  ApiUnauthorizedResponse,
} from "@nestjs/swagger";
import { ExamplesObject } from "@nestjs/swagger/dist/interfaces/open-api-spec.interface";
import { isEmpty } from "class-validator";
import { BadRequestException } from "../exception/exceptions/bad-request/bad.request.exception";
import { MissingReqItemException } from "../exception/exceptions/bad-request/impl/missing.req.item.exception";
import { ConflictException } from "../exception/exceptions/conflict/conflict.exception";
import { ForbiddenException } from "../exception/exceptions/forbidden/forbidden.exception";
import { UnhandledException } from "../exception/exceptions/internal-server-error/Impl/unhandled.exception";
import { InternalServerException } from "../exception/exceptions/internal-server-error/internal.server.exception";
import { NotFoundException } from "../exception/exceptions/not-found/not.found.exception";
import { ExpiredTokenException } from "../exception/exceptions/unauthorized/impl/expired.token.exception";
import { LoggedOutAccessTokenException } from "../exception/exceptions/unauthorized/impl/logged.out.access.token.exception";
import { UnauthorizedException } from "../exception/exceptions/unauthorized/unauthorized.exception";
import { CustomException } from "../exception/impl/custom.exception";
import { JwtAccessAuthGuard } from "../guards/jwt.access.auth.guard";
import { JwtRefreshAuthGuard } from "../guards/jwt.refresh.auth.guard";
import { ROLE_ENUM } from "src/common/types/role";
import { RolesGuard } from "../guards/roles.guard";
import { DECORATOR } from "src/common/decorator/decorator";

export type ControllerDecoratorGeneratorType = {
  description: string;
  summary: string;
  deprecated?: boolean;
  guards: {
    useAccess: boolean;
    useGuard: boolean;
    useRefresh?: boolean;
  };
  roles?: ROLE_ENUM.TYPE[];
};

export type ControllerDecoratorGeneratorParameterType = {
  path: string;
  operation: ApiOperationOptions;
  response: ApiResponseOptions;
  errors?: {
    badRequest?: BadRequestException[];
    unauthorized?: UnauthorizedException[];
    forbidden?: ForbiddenException[];
    notFound?: NotFoundException[];
    conflict?: ConflictException[];
    internalServerError?: InternalServerException[];
  };
  guards: {
    useAccess: boolean;
    useGuard: boolean;
    useRefresh?: boolean;
  };
  roles?: ROLE_ENUM.TYPE[];
  defaultErrors?: {
    badRequest?: boolean;
    unauthorized?: boolean;
    internalServerError?: boolean;
  };
};

const generateErrorResponse = (param: { errors: ExamplesObject }): ApiResponseNoStatusOptions => {
  return {
    content: {
      "application/json": {
        examples: {
          ...param.errors,
        },
      },
    },
  };
};

const generateGuard = (param: {
  useAccess: boolean;
  useGuard: boolean;
  useRefresh?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
}): (CanActivate | Function)[] => {
  const list = [];

  if (param.useAccess) {
    list.push(JwtAccessAuthGuard);
  }

  if (param.useRefresh) {
    list.push(JwtRefreshAuthGuard);
  }

  if (param.useGuard) {
    list.push(RolesGuard);
  }

  return list;
};

const setDefaultValue = (
  param: ControllerDecoratorGeneratorParameterType,
): ControllerDecoratorGeneratorParameterType => {
  if (isEmpty(param.defaultErrors)) {
    param.defaultErrors = {
      badRequest: true,
      unauthorized: true,
      internalServerError: true,
    };

    return param;
  }

  if (isEmpty(param.defaultErrors.badRequest)) {
    param.defaultErrors.badRequest = true;
  }

  if (isEmpty(param.defaultErrors.unauthorized)) {
    param.defaultErrors.unauthorized = true;
  }

  if (isEmpty(param.defaultErrors.internalServerError)) {
    param.defaultErrors.internalServerError = true;
  }

  return param;
};

const defaultBadRequestExceptions = [new MissingReqItemException(["tmp1", "tmp2"])];
const defaultUnauthorizedExceptions = [new ExpiredTokenException(), new LoggedOutAccessTokenException()];
const defaultInternalServerErrorExceptions = [new UnhandledException()];

/**
 * API 데코레이터 생성
 */
export const generateControllerDecorator = (
  param: ControllerDecoratorGeneratorParameterType,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
): (<TFunction extends Function, Y>(
  target: object | TFunction,
  propertyKey?: string | symbol,
  descriptor?: TypedPropertyDescriptor<Y>,
) => void) => {
  param = setDefaultValue(param);

  if (param.guards.useGuard && (isEmpty(param.roles) || param.roles.length < 1)) {
    param.guards.useGuard = false;
  }

  const errorDict: { [key: string]: ExamplesObject } = {};
  const list = [];

  // 디폴트 exception 추가
  for (const defaultException in param.defaultErrors) {
    if (!errorDict[defaultException]) {
      errorDict[defaultException] = {};
    }

    if (param.defaultErrors[defaultException]) {
      switch (defaultException) {
        case "badRequest":
          defaultBadRequestExceptions.forEach((x) => {
            errorDict[defaultException][x.constructor.name] = {
              value: (x as CustomException).toRes(param.path),
            };
          });
          break;
        case "unauthorized":
          defaultUnauthorizedExceptions.forEach((x) => {
            errorDict[defaultException][x.constructor.name] = {
              value: (x as CustomException).toRes(param.path),
            };
          });
          break;
        case "internalServerError":
          defaultInternalServerErrorExceptions.forEach((x) => {
            errorDict[defaultException][x.constructor.name] = {
              value: (x as CustomException).toRes(param.path),
            };
          });
          break;
      }
    }
  }

  // 지정 exception 추가
  for (const error in param.errors) {
    if (!errorDict[error]) {
      errorDict[error] = {};
    }

    for (const exception of param.errors[error]) {
      errorDict[error][exception.constructor.name] = {
        value: (exception as CustomException).toRes(param.path),
      };
    }
  }

  for (const errorNm in errorDict) {
    switch (errorNm) {
      case "badRequest":
        list.push(ApiBadRequestResponse(generateErrorResponse({ errors: errorDict[errorNm] })));
        break;
      case "unauthorized":
        list.push(ApiUnauthorizedResponse(generateErrorResponse({ errors: errorDict[errorNm] })));
        break;
      case "forbidden":
        list.push(ApiForbiddenResponse(generateErrorResponse({ errors: errorDict[errorNm] })));
        break;
      case "notFound":
        list.push(ApiNotFoundResponse(generateErrorResponse({ errors: errorDict[errorNm] })));
        break;
      case "conflict":
        list.push(ApiConflictResponse(generateErrorResponse({ errors: errorDict[errorNm] })));
        break;
      case "internalServerError":
        list.push(ApiInternalServerErrorResponse(generateErrorResponse({ errors: errorDict[errorNm] })));
        break;
    }
  }

  // guard 추가
  const guardList = generateGuard({ ...param.guards });

  return applyDecorators(
    ApiOperation({ ...param.operation }),
    ApiResponse({ status: 201, ...param.response }),
    ...list,
    param.guards.useGuard ? DECORATOR.METHOD.ROLES(...param.roles) : undefined,
    UseGuards(...guardList),
  );
};
