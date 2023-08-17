import { StreamableFile } from "@nestjs/common";
import { DatabaseService } from "../domain/database.service";
export declare class DatabaseController {
    private databaseservice;
    PDFService: any;
    constructor(databaseservice: DatabaseService);
    getFile(): StreamableFile;
    savePDF(): string;
}
