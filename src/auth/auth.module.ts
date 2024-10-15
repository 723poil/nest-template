import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthRepository } from "./repository/auth.repository";
import { authExpiredJwtService } from "./service/auth.expired.jwt.service";

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      global: true,
      useFactory: (configService: ConfigService) => {
        return {
          secret: configService.get<string>("JWT_ACCESS_SECRET"),
          signOptions: {
            expiresIn: `${configService.get<number>("JWT_ACCESS_EXPIRATION_TIME")}m`,
          },
        };
      },
    }),
  ],
  controllers: [],
  providers: [authExpiredJwtService, AuthRepository],
  exports: [PassportModule],
})
export class AuthModule {}
