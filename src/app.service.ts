import { Injectable } from "@nestjs/common";
import { Kysely } from "kysely";
import { DB } from "./kysely/types";
import { PrismaService } from "./config/database/prisma.service";
import { KyselyService } from "./config/database/kysely.service";
import { PartialType } from "@nestjs/swagger";

@Injectable()
export class AppService {
  private db: Kysely<DB>;

  constructor(
    private readonly prismaService: PrismaService,
    private readonly kyselyService: KyselyService,
  ) {
    this.db = kyselyService.getDb();
  }

  async getHello(): Promise<string> {
    console.log(await this.db.selectFrom("tb_ad_area as ad").selectAll().execute());
    return "Hello World!";
  }
}

PartialType;
