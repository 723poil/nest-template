import { ROLES_DECORATOR } from "./method/roles.decorator";
import { TRANSACTION_DECORATOR } from "./method/transaction.decorator";
import { CREDENTIAL_DECORATOR } from "./parameter/credential.decorator";
import { PARSER_DECORATOR } from "./parameter/parser.decorator";
import { VALIDATION_DECORATOR } from "./property/validation.decorator";

export const DECORATOR = {
  PROPERTY: {
    VALIDATION: VALIDATION_DECORATOR,
  },
  PARAMETER: {
    CREDENTIAL: CREDENTIAL_DECORATOR,
    PARSER: PARSER_DECORATOR,
  },
  METHOD: {
    TRANSACTION: TRANSACTION_DECORATOR,
    ROLES: ROLES_DECORATOR,
  },
};
