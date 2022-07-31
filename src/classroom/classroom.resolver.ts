import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ClassroomService } from './classroom.service';
import { Classroom } from './dto/classroom.entity';
import { ClassroomInput } from './dto/classroom.input';

@Resolver()
export class ClassroomResolver {
  constructor(private readonly classroomService: ClassroomService) {}
  @Query(() => [Classroom])
  fetchClassrooms() {
    return this.classroomService.findAll();
  }

  @Query(() => Boolean)
  deteleClassroom(@Args({ name: 'id', type: () => String }) id: string) {
    return this.classroomService.deleteOne(id);
  }

  @Mutation(() => Classroom)
  createClassroom(
    @Args({ name: 'inputClassroom', type: () => ClassroomInput })
    inputClassroom: ClassroomInput,
  ) {
    return this.classroomService.insertOne(inputClassroom);
  }

  @Mutation(() => Classroom)
  updateClassroom(
    @Args({ name: 'id', type: () => String }) id: string,
    @Args({ name: 'inputClassroom', type: () => ClassroomInput })
    inputClassroom: ClassroomInput,
  ) {
    return this.classroomService.updateOne(id, inputClassroom);
  }
}
