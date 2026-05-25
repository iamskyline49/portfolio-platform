import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ResearchService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.research.create({
      data,
    });
  }

  findAll() {
    return this.prisma.research.findMany({
      orderBy: {
        publishedAt: 'desc',
      },
    });
  }

  findOne(id: number) {
    return this.prisma.research.findUnique({
      where: { id },
    });
  }

  update(id: number, data: any) {
    return this.prisma.research.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.research.delete({
      where: { id },
    });
  }
}
