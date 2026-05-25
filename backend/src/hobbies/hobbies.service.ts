import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HobbiesService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.hobby.create({
      data,
    });
  }

  findAll() {
    return this.prisma.hobby.findMany();
  }

  findOne(id: number) {
    return this.prisma.hobby.findUnique({
      where: { id },
    });
  }

  update(id: number, data: any) {
    return this.prisma.hobby.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.hobby.delete({
      where: { id },
    });
  }
}
