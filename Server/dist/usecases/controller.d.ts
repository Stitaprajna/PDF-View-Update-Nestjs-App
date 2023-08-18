/// <reference types="multer" />
import { StreamableFile } from "@nestjs/common";
import { DatabaseService } from "../domain/service";
export declare class DatabaseController {
    private databaseservice;
    PDFService: any;
    constructor(databaseservice: DatabaseService);
    getFile(): StreamableFile;
    uploadFile(file: Express.Multer.File): void;
}
