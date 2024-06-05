import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalsModule } from './animals/animals.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { BirdsModule } from './birds/birds.module';

@Module({
  imports: [AnimalsModule, MongooseModule.forRoot('mongodb://localhost:27017/nest'), CatsModule, DogsModule, BirdsModule], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
