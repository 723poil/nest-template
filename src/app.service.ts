import { Inject, Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { Kysely } from "kysely";
import { bk_goods, DB } from "./kysely/types";

@Injectable()
export class AppService {
  constructor(
    private readonly prisma: PrismaClient,
    @Inject("KyselyInstance")
    private readonly kysely: Kysely<DB>,
  ) {}

  async getHello(): Promise<string> {
    console.log(await this.kysely.selectFrom("tb_ad_area as ad").selectAll().execute());
    return "Hello World!";
  }
}
