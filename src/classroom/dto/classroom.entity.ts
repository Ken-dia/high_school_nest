/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';

@ObjectType()
export class Classroom {
  @Field((type) => ID)
  id: ObjectId;

  @Field()
  name: string;
}
