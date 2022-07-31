import { Schema } from 'mongoose';

export const classroomSchema = new Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true },
);
