import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AdminDocument = HydratedDocument<Admin>;

@Schema({versionKey: false})
export class Admin {
  @Prop({required: true})
  full_name: string;

  @Prop({required: true})
  email: string;

  @Prop({})
  phone: string;

  @Prop()
  telegram_link: string;

  @Prop({required: true})
  hashed_password: string;

  @Prop()
  description: string;

  @Prop()
  hashed_token: string;

  @Prop({default: true})
  is_active: boolean;

  @Prop({default: false})
  is_creator: boolean;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
