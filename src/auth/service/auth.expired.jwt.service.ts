import { Injectable } from "@nestjs/common";
import { AuthRepository } from "../repository/auth.repository";

@Injectable()
export class authExpiredJwtService {
  constructor(private readonly authRepository: AuthRepository) {}

  //   async isExpiredToken(mobileNo: string, token: string): Promise<boolean> {
  //     return await this.authRepository.existExpiredJwt(mobileNo, token);
  //   }

  //   async expireToken(tokenList: { id: string; token: string; end_dt: Date }[]): Promise<void> {
  //     await this.authRepository.insertJwt(tokenList);
  //   }
}
