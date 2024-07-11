import { Injectable } from "@nestjs/common";
import { Kysely } from "kysely";
import { DB } from "../../kysely/types";
import { PrismaService } from "../../config/database/prisma.service";
import { KyselyService } from "../../config/database/kysely.service";
import { toCamelCase } from "../../utils/case.transform";

@Injectable()
export class UnitTestService {
  private db: Kysely<DB>;

  constructor(
    private readonly prismaService: PrismaService,
    private readonly kyselyService: KyselyService,
  ) {
    this.db = kyselyService.getDb();
  }

  async prismaTest() {
    return toCamelCase(await this.prismaService.tb_vinfo.findFirst());
  }

  async kyselyTest() {
    return await this.db.selectFrom("tb_vinfo").selectAll().limit(1).execute();
  }
}
