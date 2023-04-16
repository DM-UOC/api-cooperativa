import { prop } from "@typegoose/typegoose";
import { ObjectId } from "mongoose";
import { AuditoriaEntity } from "@models/auditoria/entities/auditoria.entity";

export class UsuarioEntity {

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
  @prop({ type: AuditoriaEntity, _id: false })
  auditoria: AuditoriaEntity;

}
