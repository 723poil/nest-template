import { SetMetadata } from "@nestjs/common";
import { ROLE_ENUM } from "src/common/types/role";

export const ROLES_DECORATOR = (...roles: ROLE_ENUM.TYPE[]) => SetMetadata("roles", roles);
