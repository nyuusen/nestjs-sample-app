import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CatsModule } from 'src/cats/cats.module';
import { LoggerMiddleware } from 'src/middleware/logger.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsController } from './dogs/dogs.controller';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CatsModule, AuthModule, UsersModule],
  controllers: [AppController, DogsController],
  providers: [AppService, UsersService],
})
export class AppModule implements NestModule {
  // カスタムミドルウェアの登録はconfigureで行う
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cats');
  }
}
