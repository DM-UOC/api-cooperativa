import { ObjectId } from "mongoose";

import { AuditoriaEntity } from "@models/comun/auditoria/entities/auditoria.entity";

export class SolicitudEntity {

  readonly _id: ObjectId;
  usuario_id!: ObjectId;
  description!: string;
  fecha_presentacion!: Date;
  estado!: boolean;
  auditoria!: AuditoriaEntity;

}
