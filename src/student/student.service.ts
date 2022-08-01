import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StudentInput } from './dto/student.input';
import { IStudent } from './interfaces/student.interface';
import { studentModelName } from './student.model-name';

@Injectable()
export class StudentService {
  constructor(@InjectModel(studentModelName) private model: Model<IStudent>) {}

  async findAll(): Promise<IStudent[]> {
    return this.model.find();
  }
  insertOne(input: StudentInput): Promise<IStudent> {
    return this.model.create(input);
  }
  async updateOne(id: string, input: StudentInput): Promise<IStudent> {
    return this.model.findByIdAndUpdate(id, input, { new: true });
  }
  async deleteOne(id: string): Promise<boolean> {
    const result = await this.model.deleteOne({ _id: id });
    return result.acknowledged;
  }
}
