import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Role } from "../../types/role";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles: Role[] = this.reflector.getAllAndOverride<Role[]>("roles", [context.getHandler(), context.getClass()]);

    if (!requiredRoles) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();

    return requiredRoles.some((role) => user?.role?.include(role));
  }
}
