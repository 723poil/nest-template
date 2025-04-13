import { isEmpty, registerDecorator, ValidationOptions } from "class-validator";

/**
 * VALIDATION DECORATOR
 * - MATCH_DATE: yyyy-mm-dd 검사
 * - MATCH_DATE_OPTIONAL: yyyy-mm-dd 검사 (옵션)
 * - MATCH_DATE_TIME: yyyy-mm-dd HH:ii:ss 검사
 * - MATCH_DATE_TIME_OPTIONAL: yyyy-mm-dd HH:ii:ss 검사 (옵션)
 * - MATCH_YEAR_MONTH: yyyy-mm 검사
 * - MATCH_YEAR: yyyy 검사
 */
export const VALIDATION_DECORATOR = {
  /**
   * VALIDATION matchDate
   */
  MATCH_DATE: (property: string, validationOptions?: ValidationOptions) => {
    return (object: object, propertyName: string) => {
      registerDecorator({
        name: "MatchDate",
        target: object.constructor,
        propertyName,
        options: validationOptions,
        constraints: [property],
        validator: {
          validate(value: any): Promise<boolean> | boolean {
            const regex = RegExp(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/);
            return regex.test(value);
          },
        },
      });
    };
  },
  /**
   * VALIDATION matchDateOptional
   */
  MATCH_DATE_OPTIONAL: (property: string, validationOptions?: ValidationOptions) => {
    return (object: object, propertyName: string) => {
      registerDecorator({
        name: "MatchDtCheckOptional",
        target: object.constructor,
        propertyName,
        options: validationOptions,
        constraints: [property],
        validator: {
          validate(value: any): Promise<boolean> | boolean {
            if (isEmpty(value)) return true;

            const regex = RegExp(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/);
            return regex.test(value);
          },
        },
      });
    };
  },
  /**
   * VALIDATION matchDateTimeOptional
   */
  MATCH_DATE_TIME_OPTIONAL: (property: string, validationOptions?: ValidationOptions) => {
    return (object: object, propertyName: string) => {
      registerDecorator({
        name: "MatchDtmCheckOptional",
        target: object.constructor,
        propertyName,
        options: validationOptions,
        constraints: [property],
        validator: {
          validate(value: any): Promise<boolean> | boolean {
            if (isEmpty(value)) return true;

            const regex = RegExp(
              /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]) (0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/,
            );
            return regex.test(value);
          },
        },
      });
    };
  },
  /**
   * VALIDATION matchDateTime
   */
  MATCH_DATE_TIME: (property: string, validationOptions?: ValidationOptions) => {
    return (object: object, propertyName: string) => {
      registerDecorator({
        name: "MatchDtm",
        target: object.constructor,
        propertyName,
        options: validationOptions,
        constraints: [property],
        validator: {
          validate(value: any): Promise<boolean> | boolean {
            const regex = RegExp(
              /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01]) (0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/,
            );
            return regex.test(value);
          },
        },
      });
    };
  },

  /**
   * VALIDATION matchYearMonth
   */
  MATCH_YEAR_MONTH: (property: string, validationOptions?: ValidationOptions) => {
    return (object: object, propertyName: string) => {
      registerDecorator({
        name: "MatchDate",
        target: object.constructor,
        propertyName,
        options: validationOptions,
        constraints: [property],
        validator: {
          validate(value: any): Promise<boolean> | boolean {
            const regex = RegExp(/^\d{4}-(0[1-9]|1[012])$/);
            return regex.test(value);
          },
        },
      });
    };
  },

  /**
   * VALIDATION matchYear
   */
  MATCH_YEAR: (property: string, validationOptions?: ValidationOptions) => {
    return (object: object, propertyName: string) => {
      registerDecorator({
        name: "MatchDate",
        target: object.constructor,
        propertyName,
        options: validationOptions,
        constraints: [property],
        validator: {
          validate(value: any): Promise<boolean> | boolean {
            const regex = RegExp(/^\d{4}$/);
            return regex.test(value);
          },
        },
      });
    };
  },
};
