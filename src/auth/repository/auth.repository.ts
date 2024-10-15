import { Injectable } from "@nestjs/common";
import { BaseRepository } from "src/core/database/base.repository";

@Injectable()
export class AuthRepository extends BaseRepository {}
