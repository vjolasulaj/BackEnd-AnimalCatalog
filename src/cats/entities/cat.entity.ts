import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Cat>;

@Schema()
export class Cat {
  @Prop({required:true})
  name: string;

  @Prop({required:true})
  origin: string;

  @Prop({required:true})
  temperament: string;

  @Prop({required:true})
  colors: string[];

  @Prop({required:true})
  imgsrc: string;

  @Prop({required:true})
  description: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
