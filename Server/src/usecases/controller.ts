import { Body, Controller, Get, Post, Put,StreamableFile, UploadedFile, UseInterceptors } from "@nestjs/common";
import { DatabaseService } from "../domain/service";
import { PDFService } from '@t00nday/nestjs-pdf';
import { createReadStream } from 'fs';
import { join } from 'path';
import { FileInterceptor } from "@nestjs/platform-express";



@Controller('auth')
export class DatabaseController {
  PDFService: any;
constructor(private databaseservice: DatabaseService){}
  @Get('Load-PDF-File')
  getFile(): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'PDF-View-Update-Nestjs-App/Server/src/example.pdf'));
    console.log('file read');
    return new StreamableFile(file);
  }
  

@Post('Save-PDF-File')
@UseInterceptors(FileInterceptor('file'))
uploadFile(@UploadedFile() file: Express.Multer.File) {
  console.log(file);
  console.log('sucess');
}

}
