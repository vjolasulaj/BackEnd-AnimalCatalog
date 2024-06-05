import { Injectable } from '@nestjs/common';
import { CreateBirdDto } from './dto/create-bird.dto';
import { UpdateBirdDto } from './dto/update-bird.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Bird } from './entities/bird.entity';
import { Model } from 'mongoose';

@Injectable()
export class BirdsService {
  constructor(@InjectModel(Bird.name) private birdModel: Model<Bird>) {}
  async create(createBirdDto: CreateBirdDto): Promise<Bird> {
    const createdBird = new this.birdModel(createBirdDto);
    return createdBird.save();
  }

  async findAll() : Promise<Bird[]>{
    return this.birdModel.find().exec();
  }

  async findOne(id: string) {
    return this.birdModel.findOne({_id:id}).exec();
  }

  async update(id: string, updateBirdDto: UpdateBirdDto) {
    return this.birdModel.updateOne({_id: id}, updateBirdDto);
  }

  async delete(id: string) {
    return this.birdModel.deleteOne({_id: id});
  }

  async search(name: string) {
    const nameRegex = new RegExp(name, 'i');
    return this.birdModel.find({ name: nameRegex }).exec();
  }
}
