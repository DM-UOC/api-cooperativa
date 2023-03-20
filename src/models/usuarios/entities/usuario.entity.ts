import { prop } from "@typegoose/typegoose";
import { ObjectId } from "mongoose";

export class Usuario {

  readonly _id: ObjectId;
  @prop({ required: true })
  nombre!: string;
  @prop({ required: true })
  apellido!: string;
  @prop({ required: true })
  nombre_completo!: string;
  @prop({ required: true })
  fecha_nacimiento!: Date;
  @prop({ required: true })
  correos: string[];
}
