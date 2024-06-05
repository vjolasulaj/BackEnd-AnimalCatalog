import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './entities/cat.entity';
import { Model } from 'mongoose';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}
  
  async create(createCatDto: CreateCatDto) : Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  async findOne(id: string) {
    return this.catModel.findOne({_id:id}).exec();
  }

  async update(id: string, updateCatDto: UpdateCatDto) {
    return this.catModel.updateOne({_id: id}, updateCatDto);
  }

  async delete(id: string) {
    return this.catModel.deleteOne({_id: id});
  }

  async search(name: string) {
    const nameRegex = new RegExp(name, 'i');
    return this.catModel.find({ name: nameRegex }).exec();
  }
}
