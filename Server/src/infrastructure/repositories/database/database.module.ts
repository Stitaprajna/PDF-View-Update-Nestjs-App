import { Module } from "@nestjs/common";
import { DatabaseController } from "../../../usecases/controller";
import { DatabaseService } from "../../../domain/service";

@Module({
    controllers: [DatabaseController],
    providers: [DatabaseService]
})
export class DatabaseModule {}

