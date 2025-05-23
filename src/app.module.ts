import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { CoreModule } from "./core/core.module";

const apiModule = [AuthModule];

@Module({
  imports: [CoreModule, ...apiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
