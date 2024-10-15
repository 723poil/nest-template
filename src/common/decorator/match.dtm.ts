import { registerDecorator, ValidationOptions } from "class-validator";

export const MatchDtm = (property: string, validationOptions?: ValidationOptions) => {
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
};
