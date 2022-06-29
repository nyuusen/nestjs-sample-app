import { Module } from '@nestjs/common';
import { CatsModule } from 'src/cats/cats.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsController } from './dogs/dogs.controller';

@Module({
  imports: [CatsModule],
  controllers: [AppController, DogsController],
  providers: [AppService],
})
export class AppModule {}
