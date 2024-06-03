import { camelCase, mapKeys, snakeCase } from "lodash";

export const toCamelCaseObj = <T>(obj: any): T => {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  return mapKeys(obj, (_, key) => camelCase(key)) as T;
};

export const toCamelCaseArray = <T>(array: any[]): T[] => {
  return array.map(toCamelCaseObj<T>);
};

export const toCamelCase = <T>(value: any | any[]): T | T[] => {
  if (Array.isArray(value)) {
    return toCamelCaseArray<T>(value);
  }

  return toCamelCaseObj<T>(value);
};

export const toSnakeCaseObj = <T>(obj: T): any => {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  return mapKeys(obj, (_, key) => snakeCase(key)) as T;
};

export const toSnakeCaseArray = <T>(array: T[]): any[] => {
  return array.map(toSnakeCaseObj<T>);
};

export const toSnakeCase = <T>(value: T | T[]): any | any[] => {
  if (Array.isArray(value)) {
    return toSnakeCaseArray<T>(value);
  }

  return toSnakeCaseObj<T>(value);
};
