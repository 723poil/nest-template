import { Test, TestingModule } from "@nestjs/testing";
import { UnitTestController } from "../unit-test.controller";
import { UnitTestService } from "../unit-test.service";
import { vinfo } from "./test.model";

describe("UnitTestController", () => {
  let unitTestController: UnitTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UnitTestController],
      providers: [
        {
          provide: UnitTestService,
          useValue: {
            prismaTest: jest.fn().mockResolvedValue(vinfo),
            kyselyTest: jest.fn().mockResolvedValue(vinfo),
          },
        },
      ],
    }).compile();

    unitTestController = module.get<UnitTestController>(UnitTestController);
  });

  it("should be defined", () => {
    expect(unitTestController).toBeDefined();
  });

  describe("prisma test", () => {
    it("mock service test", async () => {
      const result = await unitTestController.prismaTest();

      expect(result).toEqual(vinfo);
    });
  });

  describe("kysely test", () => {
    it("mock service test", async () => {
      const result = await unitTestController.kyselyTest();

      expect(result).toEqual(vinfo);
    });
  });
});
