import { ObjectId } from "mongoose";

import { AuditoriaEntity } from "@models/comun/auditoria/entities/auditoria.entity";
import { prop } from "@typegoose/typegoose";

export class SolicitudEntity {

  readonly _id: ObjectId;
  usuario_id!: ObjectId;
  @prop({ required: true })
  description!: string;
  @prop({ required: true })
  fecha_presentacion!: Date;
  @prop({ required: true, default: false })
  estado!: boolean;
  @prop({ required: true, type: AuditoriaEntity })
  auditoria!: AuditoriaEntity;

}
