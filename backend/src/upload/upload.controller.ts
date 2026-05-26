import {
  Controller,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';

import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

import cloudinary from 'src/config/cloudinary';

import { memoryStorage } from 'multer';

@Controller('upload')
export class UploadController {
  @UseGuards(JwtAuthGuard)
  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: memoryStorage(),
    }),
  )
  async uploadFile(
    @UploadedFile()
    file: Express.Multer.File,
  ) {
    const base64 = file.buffer.toString('base64');

    const dataURI = `data:${file.mimetype};base64,${base64}`;

    const uploaded = await cloudinary.uploader.upload(dataURI, {
      folder: 'portfolio-projects',
    });

    return {
      url: uploaded.secure_url,
    };
  }
}
