import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Configuration extends Document {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  expiredDate: Date;

  @Prop()
  enabled: boolean;
}

export const ConfigurationSchema = SchemaFactory.createForClass(Configuration);
