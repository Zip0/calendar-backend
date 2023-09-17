import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';


@Module({
  
  imports: [
    TypeOrmModule.forRoot({
    type: "mariadb",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "calendar",
    entities: ["dist/**/task.entity{.ts,.js}"],
    synchronize: true,
  }),
    TasksModule,
    ServeStaticModule.forRoot({rootPath: join(__dirname, '../..', 'calendar-frontend/public'),}),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}