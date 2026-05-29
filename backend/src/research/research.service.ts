import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';

import { CreateResearchDto } from './dto/create-research.dto';

import { UpdateResearchDto } from './dto/update-research.dto';

@Injectable()
export class ResearchService {
  constructor(private prisma: PrismaService) {}

  create(createResearchDto: CreateResearchDto) {
    return this.prisma.research.create({
      data: createResearchDto,
    });
  }

  findAll() {
    return this.prisma.research.findMany({
      orderBy: {
        id: 'desc',
      },
    });
  }

  findOne(id: number) {
    return this.prisma.research.findUnique({
      where: { id },
    });
  }

  update(id: number, updateResearchDto: UpdateResearchDto) {
    return this.prisma.research.update({
      where: { id },

      data: updateResearchDto,
    });
  }

  remove(id: number) {
    return this.prisma.research.delete({
      where: { id },
    });
  }
}
