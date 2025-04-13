export namespace ROLE_ENUM {
  export const CONST = {
    ADMIN: "admin",
    USER: "user",
  } as const;

  export type TYPE = (typeof CONST)[keyof typeof CONST];

  export const LIST: TYPE[] = Object.values(CONST);
}
