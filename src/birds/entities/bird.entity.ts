import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BirdDocument = HydratedDocument<Bird>;

@Schema()
export class Bird {
  @Prop({required:true})
  name: string;

  @Prop({required:true})
  origin: string;

  @Prop({required:true})
  species: string;

  @Prop({required:true})
  family: string;

  @Prop({required:true})
  imgsrc: string;

  @Prop({required:true})
  habitat: string;

  @Prop({required:true})
  diet: string;

  @Prop({required:true})
  description: string;

  @Prop({required:true})
  wingspan_cm: number;

  @Prop({required:true})
  weight_kg: number;
}

export const BirdSchema = SchemaFactory.createForClass(Bird);
