import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DogDocument = HydratedDocument<Dog>;

@Schema()
export class Dog {
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

  @Prop({required:true})
  breed_group: string;

  @Prop({required:true})
  size: string;

  @Prop({required:true})
  lifespan: string;
}

export const DogSchema = SchemaFactory.createForClass(Dog);
