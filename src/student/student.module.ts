import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { studentModelName } from './student.model-name';
import { studentSchema } from './student.schema';
import { StudentResolver } from './student.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: studentModelName,
        schema: studentSchema,
      },
    ]),
  ],
  providers: [StudentService, StudentResolver],
})
export class StudentModule {}
