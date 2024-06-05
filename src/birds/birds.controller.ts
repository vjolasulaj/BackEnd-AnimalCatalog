import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { BirdsService } from './birds.service';
import { CreateBirdDto } from './dto/create-bird.dto';
import { UpdateBirdDto } from './dto/update-bird.dto';

@Controller('birds')
export class BirdsController {
  constructor(private readonly birdsService: BirdsService) {}

  @Post()
  create(@Body() createBirdDto: CreateBirdDto) {
    return this.birdsService.create(createBirdDto);
  }

  @Get()
  findAll() {
    return this.birdsService.findAll();
  }

  @Get('/search')
  search(@Query('name') name:string){
    return this.birdsService.search(name);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.birdsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBirdDto: UpdateBirdDto) {
    return this.birdsService.update(id, updateBirdDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.birdsService.delete(id);
  }
}
