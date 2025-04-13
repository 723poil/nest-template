import { isEmpty } from "class-validator";
import { camelCase, mapKeys, snakeCase } from "lodash";

export function toCamelCase<T>(obj: object): T;
export function toCamelCase<T>(obj: object[]): T[];

export function toCamelCase<T>(obj: object | object[]): T | T[] {
  const toCamelCaseObj = <T>(obj: object): T => {
    if (isEmpty(obj) || typeof obj !== "object") {
      return undefined;
    }

    return mapKeys(obj, (_, key) => camelCase(key)) as T;
  };

  if (Array.isArray(obj)) {
    return obj.map(toCamelCaseObj<T>);
  }

  return toCamelCaseObj<T>(obj);
}

export function toSnakeCase<T>(obj: object): T;
export function toSnakeCase<T>(obj: object[]): T[];

export function toSnakeCase<T>(obj: object | object[]): T | T[] {
  const toSnakeCaseObj = <T>(obj: object): T => {
    if (isEmpty(obj) || typeof obj !== "object") {
      return undefined;
    }

    return mapKeys(obj, (_, key) => snakeCase(key)) as T;
  };

  if (Array.isArray(obj)) {
    return obj.map(toSnakeCaseObj<T>);
  }

  return toSnakeCaseObj<T>(obj);
}
