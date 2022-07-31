import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ClassroomInput {
  @Field()
  name: string;
}
