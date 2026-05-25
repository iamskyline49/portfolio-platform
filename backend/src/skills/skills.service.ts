import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SkillsService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.skill.create({
      data,
    });
  }

  findAll() {
    return this.prisma.skill.findMany();
  }

  findOne(id: number) {
    return this.prisma.skill.findUnique({
      where: { id },
    });
  }

  update(id: number, data: any) {
    return this.prisma.skill.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.skill.delete({
      where: { id },
    });
  }
}
