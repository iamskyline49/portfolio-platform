import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { ResearchService } from './research.service';

import { CreateResearchDto } from './dto/create-research.dto';
import { UpdateResearchDto } from './dto/update-research.dto';

@Controller('research')
export class ResearchController {
  constructor(private readonly researchService: ResearchService) {}

  @Post()
  create(@Body() body: CreateResearchDto) {
    return this.researchService.create(body);
  }

  @Get()
  findAll() {
    return this.researchService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.researchService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateResearchDto) {
    return this.researchService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.researchService.remove(+id);
  }
}
