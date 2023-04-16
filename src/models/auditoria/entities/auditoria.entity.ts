import { prop } from "@typegoose/typegoose";

export class AuditoriaEntity {

  @prop({ required: true })
  usuario_inserta!: string;
  @prop({ required: true, default: new Date() })
  fecha_inserta!: Date;
  @prop({ required: true })
  ip_inserta!: string;
  @prop({ required: true })
  usuario_actauliza?: string;
  @prop({ required: true, default: new Date() })
  fecha_actauliza?: Date;
  @prop({ required: true })
  ip_actauliza?: string;

}