import { Body, Controller, Get, Post, Put,StreamableFile, UseInterceptors } from "@nestjs/common";
import { DatabaseService } from "../domain/service";
import { PDFService } from '@t00nday/nestjs-pdf';
import { createReadStream } from 'fs';
import { join } from 'path';



@Controller('auth')
export class DatabaseController {
  PDFService: any;
constructor(private databaseservice: DatabaseService){}
  @Get('Load-PDF-File')
  getFile(): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'Nestjsapp/Server/src/example.pdf'));
    console.log('file read');
    return new StreamableFile(file);
  }
  

@Post('Save-PDF-File')
@UseInterceptors(FileInterceptor('pdf', { dest: 'Nestjsapp/Server/src/example.pdf' })){
  uploadfile(@UploadedFiles() File): string {
    return 'success';
    }
  }
}


