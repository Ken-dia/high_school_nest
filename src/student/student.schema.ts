import { Schema } from 'mongoose';
import { classroomModelName } from 'src/classroom/classroom.model-name';

export const studentSchema = new Schema(
  {
    nom: { type: String },
    prenom: { type: String },
    genre: { type: String },
    lieuNaiss: { type: String },
    dateNaiss: { type: Date },
    classroom: { type: Schema.Types.ObjectId, ref: classroomModelName },
  },
  { timestamps: true },
);
