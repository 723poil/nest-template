import { Controller, Get, Res } from "@nestjs/common";
import { AppService } from "./app.service";
import { Response } from "express";

@Controller({
  version: "",
})
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("favicon.ico")
  faviconIco(@Res() res: Response) {
    res.status(204).send();
  }
}
