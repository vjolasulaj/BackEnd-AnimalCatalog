import { Injectable } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Dog, DogDocument } from './entities/dog.entity';
import { Model } from 'mongoose';

@Injectable()
export class DogsService {
  constructor(@InjectModel(Dog.name) private dogModel: Model<Dog>) {}

  async create(createDogDto: CreateDogDto): Promise<Dog> {
    const createdDog = new this.dogModel(createDogDto);
    return createdDog.save();
  }

  async findAll(): Promise<Dog[]> {
    return this.dogModel.find().exec();
  }

  async findOne(id: string) {
    return this.dogModel.findOne({_id:id}).exec();
  }

  async update(id: string, updateDogDto: UpdateDogDto) {
    return this.dogModel.updateOne({ _id: id }, updateDogDto);
  }

  async delete(id: string) {
    return this.dogModel.deleteOne({ _id: id });
  }

  async search(name: string) {
    const nameRegex = new RegExp(name, 'i');
    return this.dogModel.find({ name: nameRegex }).exec();
  }
}
