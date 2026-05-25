import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContactService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.contact.create({
      data,
    });
  }

  findAll() {
    return this.prisma.contact.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  findOne(id: number) {
    return this.prisma.contact.findUnique({
      where: { id },
    });
  }

  remove(id: number) {
    return this.prisma.contact.delete({
      where: { id },
    });
  }
}
