import { Module } from '@nestjs/common';
import { CatsController } from 'src/cats/cats.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsController } from './dogs/dogs.controller';

@Module({
  imports: [],
  controllers: [AppController, DogsController, CatsController],
  providers: [AppService],
})
export class AppModule {}
