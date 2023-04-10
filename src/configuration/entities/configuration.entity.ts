import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Configuration extends Document {
  @Prop({ required: true, unique: true })
  id: string;

  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  expiredDate: Date;

  @Prop({ required: true })
  enabled: boolean;

  @Prop({ default: 7 })
  alertDays: number;
}

export const ConfigurationSchema = SchemaFactory.createForClass(Configuration);
