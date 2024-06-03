import { Global, Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { KyselyService } from "./kysely.service";

@Global()
@Module({
  providers: [PrismaService, KyselyService],
  exports: [PrismaService, KyselyService],
})
export class DatabaseModule {}
