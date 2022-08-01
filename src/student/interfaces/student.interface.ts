import { ObjectId, Document } from 'mongoose';

export interface IStudent extends Document {
  nom: string;
  prenom: string;
  genre: string;
  dateNaiss: Date;
  lieuNaiss: string;
  classroom: ObjectId;
}
