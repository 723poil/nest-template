import { Controller, Post } from "@nestjs/common";
import { UnitTestService } from "./unit-test.service";

@Controller("unit-test")
export class UnitTestController {
  constructor(private readonly unitTestService: UnitTestService) {}

  @Post("prisma")
  async prismaTest() {
    return await this.unitTestService.prismaTest();
  }

  @Post("kysely")
  async kyselyTest() {
    return await this.unitTestService.kyselyTest();
  }
}
