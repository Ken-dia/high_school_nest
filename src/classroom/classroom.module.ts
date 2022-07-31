import { classroomSchema } from './classroom.schema';
import { classroomModelName } from './classroom.model-name';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ClassroomService } from './classroom.service';
import { ClassroomResolver } from './classroom.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: classroomModelName, schema: classroomSchema },
    ]),
  ],
  providers: [ClassroomService, ClassroomResolver],
})
export class ClassroomModule {}
