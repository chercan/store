import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop({ required: true })
  text: string;

  @Prop({ default: Date.now })
  createAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
