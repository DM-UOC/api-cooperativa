import { prop } from "@typegoose/typegoose";

export class SubmenuEntity {
 
  @prop({ required: true })
  descripcion!: string;
  @prop({ required: true })
  enlace!: string;
  @prop({ required: true, type: SubmenuEntity })
  submenu?: this[]; 
  @prop({ required: true })
  estado!: boolean;

}
