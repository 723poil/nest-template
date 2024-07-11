import { Module } from "@nestjs/common";
import { UnitTestController } from "./unit-test.controller";
import { UnitTestService } from "./unit-test.service";

@Module({
  controllers: [UnitTestController],
  providers: [UnitTestService],
})
export class UnitTestModule {}
