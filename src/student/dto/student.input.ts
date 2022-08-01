/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, ID, InputType } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';

@InputType()
export class StudentInput {
  @Field()
  nom: string;

  @Field()
  prenom: string;

  @Field()
  genre: string;

  @Field()
  dateNaiss: Date;

  @Field()
  lieuNaiss: string;

  @Field((type) => ID)
  classroom: ObjectId;
}
