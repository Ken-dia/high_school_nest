import { ObjectId } from 'mongoose';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { IClassroom } from './../../classroom/interfaces/classroom.interface';
import { Classroom } from './../../classroom/dto/classroom.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Student {
  @Field((type) => ID)
  id: ObjectId;

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

  @Field((type) => Classroom)
  classroom: IClassroom;
}
