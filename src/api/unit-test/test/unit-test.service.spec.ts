import { Test, TestingModule } from "@nestjs/testing";
import { UnitTestService } from "../unit-test.service";
import { PrismaService } from "../../../config/database/prisma.service";
import { KyselyService } from "../../../config/database/kysely.service";
import { vinfo } from "./test.model";

describe("UnitTestService", () => {
  let unitTestService: UnitTestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UnitTestService,
        {
          provide: PrismaService,
          useValue: {
            tb_vinfo: {
              findFirst: jest.fn().mockResolvedValue(vinfo),
            },
          },
        },
        {
          provide: KyselyService,
          useValue: {
            getDb: jest.fn().mockReturnValue({
              selectFrom: jest.fn().mockReturnValue({
                selectAll: jest.fn().mockReturnValue({
                  limit: jest.fn().mockReturnValue({
                    execute: jest.fn().mockResolvedValue(vinfo),
                  }),
                }),
              }),
            }),
          },
        },
      ],
    }).compile();

    unitTestService = module.get<UnitTestService>(UnitTestService);
  });

  it("should be defined", () => {
    expect(unitTestService).toBeDefined();
  });

  describe("prisma test", () => {
    it("prisma mock test", async () => {
      const result = await unitTestService.prismaTest();
      expect(result).toEqual(vinfo);
    });
  });

  describe("kysely test", () => {
    it("kysely mock test", async () => {
      const result = await unitTestService.kyselyTest();
      expect(result).toEqual(vinfo);
    });
  });
});
