import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MinioClientModule } from './minio-client/minio-client.module';
import { ConfigModule } from '@nestjs/config';
import { FileUploadModule } from './file-upload/file-upload.module';

@Module({
  imports: [
    MinioClientModule,
    ConfigModule.forRoot({ isGlobal: true }),
    FileUploadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
