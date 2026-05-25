import {
  Controller,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';

import { CloudinaryStorage } from 'multer-storage-cloudinary';

import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

import cloudinary from 'src/config/cloudinary';

@Controller('upload')
export class UploadController {
  @UseGuards(JwtAuthGuard)
  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: new CloudinaryStorage({
        cloudinary,

        params: async (req, file) => ({
          folder: 'portfolio-projects',

          allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],

          public_id: Date.now().toString(),
        }),
      }),
    }),
  )
  uploadFile(
    @UploadedFile()
    file: any,
  ) {
    return {
      url: file.path,
    };
  }
}
