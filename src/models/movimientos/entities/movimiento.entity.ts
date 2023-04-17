import { ObjectId } from "mongoose";
import { prop } from "@typegoose/typegoose";

import { TIPOSMOVIMIENTOSENUM } from "@models/comun/enums/tipos_movimientos.enum";
import { AuditoriaEntity } from "@models/comun/auditoria/entities/auditoria.entity";
import { UtilitariosFechas } from "@services/utilitarios/utilitariosfechas.service";

export class MovimientoEntity {

  readonly _id: ObjectId;
  readonly usuario_id!: ObjectId;
  @prop({ required: true })
  descripcion!: string;
  @prop({ required: true, enum: TIPOSMOVIMIENTOSENUM, default: TIPOSMOVIMIENTOSENUM.DEP })
  tipo_movimiento!: string;
  @prop({ required: true, default: UtilitariosFechas.retornaFechaActual() })
  fecha_movimiento!: Date;
  @prop({ required: true, type: AuditoriaEntity })
  auditoria!: AuditoriaEntity;

}
