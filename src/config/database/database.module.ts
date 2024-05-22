import { Global, Module } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { Kysely, MysqlDialect } from "kysely";
import { ConfigService } from "@nestjs/config";
import { createPool, PoolOptions } from "mysql2";

@Global()
@Module({
  providers: [
    {
      provide: PrismaClient,
      useFactory: () => {
        const prisma = new PrismaClient();
        prisma.$connect();
        return prisma;
      },
    },
    {
      provide: "KyselyInstance",
      useFactory: async (configService: ConfigService) => {
        const kysely = new Kysely({
          dialect: new MysqlDialect({
            pool: createPool({
              host: configService.get<string>("DB_HOST"),
              port: configService.get<string>("DB_PORT"),
              user: configService.get<string>("DB_USER"),
              password: configService.get<string>("DB_PASSWORD"),
              database: configService.get<string>("DB_SCHEMA"),
            } as unknown as PoolOptions),
          }),
        });

        return kysely;
      },
      inject: [ConfigService],
    },
  ],
  exports: ["KyselyInstance", PrismaClient],
})
export class DatabaseModule {}
