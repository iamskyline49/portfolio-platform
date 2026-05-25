import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { HobbiesService } from './hobbies.service';

import { CreateHobbyDto } from './dto/create-hobby.dto';
import { UpdateHobbyDto } from './dto/update-hobby.dto';

@Controller('hobbies')
export class HobbiesController {
  constructor(private readonly hobbiesService: HobbiesService) {}

  @Post()
  create(@Body() body: CreateHobbyDto) {
    return this.hobbiesService.create(body);
  }

  @Get()
  findAll() {
    return this.hobbiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hobbiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateHobbyDto) {
    return this.hobbiesService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hobbiesService.remove(+id);
  }
}
