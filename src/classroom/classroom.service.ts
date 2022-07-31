import { ClassroomInput } from './dto/classroom.input';
import { classroomModelName } from './classroom.model-name';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IClassroom } from './interfaces/classroom.interface';

@Injectable()
export class ClassroomService {
  constructor(
    @InjectModel(classroomModelName) private model: Model<IClassroom>,
  ) {}

  async findAll(): Promise<IClassroom[]> {
    return this.model.find();
  }
  insertOne(input: ClassroomInput): Promise<IClassroom> {
    return this.model.create(input);
  }
  async updateOne(id: string, input: ClassroomInput): Promise<IClassroom> {
    return this.model.findByIdAndUpdate(id, input, { new: true });
  }
  async deleteOne(id: string): Promise<boolean> {
    const result = await this.model.deleteOne({ _id: id });
    return result.acknowledged;
  }
}
