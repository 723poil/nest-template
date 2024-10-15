export const reverseMapping = (object: { [key: string]: any }) =>
  Object.fromEntries(Object.entries(object).map(([key, value]) => [value, key]));
