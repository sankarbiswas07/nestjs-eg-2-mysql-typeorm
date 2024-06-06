import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from "./typeorm/entities/User"
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      username: 'user',
      password: 'password',
      host: 'localhost',
      port: 3306,
      database: 'mysql_nestjs',
      entities: [
        User
      ],
      synchronize: true,
    }),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
