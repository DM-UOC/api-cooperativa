import { ObjectId } from "mongoose";
import { prop } from "@typegoose/typegoose";

import { AuditoriaEntity } from "@app/src/models/comun/auditoria/entities/auditoria.entity";
import { SubmenuEntity } from "@models/submenus/entities/submenu.entity";

export class MenuEntity {

  readonly _id: ObjectId;
  @prop({ required: true })
  descripcion!: string;
  @prop({ required: true })
  enlace!: string;
  @prop({ required: true, type: SubmenuEntity })
  submenu?: SubmenuEntity[]; 
  @prop({ required: true })
  estado!: boolean;
  @prop({ type: AuditoriaEntity })
  auditoria: AuditoriaEntity;

}
