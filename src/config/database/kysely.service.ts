import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { CamelCasePlugin, Kysely, MysqlDialect } from "kysely";
import { DB } from "../../kysely/types";
import { createPool, PoolOptions } from "mysql2";
import { ConfigService } from "@nestjs/config";

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
        } as PoolOptions),
      }),
      plugins: [new CamelCasePlugin()],
    });
  }

  onModuleInit(): void {}

  async onModuleDestroy(): Promise<void> {
    await this.db.destroy();
  }

  getDb() {
    return this.db;
  }
}
