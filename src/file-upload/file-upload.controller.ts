import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { BufferedFile } from 'src/minio-client/file.model';

@Controller('file-upload')
export class FileUploadController {
    constructor(private imageUploadService: FileUploadService) {}

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    async uploadImage(@UploadedFile() image: BufferedFile) {
        return await this.imageUploadService.uploadImage(image);
    }
}
