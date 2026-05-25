import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { SkillsModule } from './skills/skills.module';
import { ProjectsModule } from './projects/projects.module';
import { ResearchModule } from './research/research.module';
import { HobbiesModule } from './hobbies/hobbies.module';
import { ContactModule } from './contact/contact.module';
import { AuthModule } from './auth/auth.module';
import { UploadController } from './upload/upload.controller';


@Module({
  imports: [PrismaModule, SkillsModule, ProjectsModule, ResearchModule, HobbiesModule, ContactModule, AuthModule],
  controllers: [AppController, UploadController],
  providers: [AppService],
})
export class AppModule {}
