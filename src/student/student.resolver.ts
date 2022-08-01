import { Query, Args, Resolver, Mutation } from '@nestjs/graphql';
import { Student } from './dto/student.entity';
import { StudentInput } from './dto/student.input';
import { StudentService } from './student.service';

@Resolver()
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}
  @Query(() => [Student])
  fetchStudents() {
    return this.studentService.findAll();
  }

  @Query(() => Boolean)
  detelestudent(@Args({ name: 'id', type: () => String }) id: string) {
    return this.studentService.deleteOne(id);
  }

  @Mutation(() => Student)
  createStudent(
    @Args({ name: 'inputStudent', type: () => StudentInput })
    inputStudent: StudentInput,
  ) {
    return this.studentService.insertOne(inputStudent);
  }

  @Mutation(() => Student)
  updatestudent(
    @Args({ name: 'id', type: () => String }) id: string,
    @Args({ name: 'inputStudent', type: () => StudentInput })
    inputStudent: StudentInput,
  ) {
    return this.studentService.updateOne(id, inputStudent);
  }
}
