import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { Kysely, MysqlDialect, MysqlPool } from "kysely";

import { ConfigService } from "@nestjs/config";
import { createPool, PoolOptions } from "mysql2";
import { DB } from "src/kysely/types";

@Injectable()
export class KyselyService implements OnModuleInit, OnModuleDestroy {
  private readonly db: Kysely<DB>;

  constructor(private readonly configService: ConfigService) {
    this.db = new Kysely<DB>({
      dialect: new MysqlDialect({
        pool: createPool({
          host: configService.get<string>("DB_HOST"),
          port: configService.get<number>("DB_PORT"),
          user: configService.get<string>("DB_USER"),
          password: configService.get<string>("DB_PASSWORD"),
          database: configService.get<string>("DB_SCHEMA"),
        } as PoolOptions) as MysqlPool,
      }),
      log: process.env.MODE !== "test" ? ["query", "error"] : ["error"],
      // plugins: [new CamelCasePlugin()],
    });
  }

  get DB(): Kysely<DB> {
    return this.db;
  }

  onModuleInit(): void {}

  async onModuleDestroy(): Promise<void> {
    await this.db.destroy();
  }
}
