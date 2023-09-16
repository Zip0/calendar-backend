import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/calendar'),
    TasksModule, 
    // ServeStaticModule.forRoot({rootPath: join(__dirname, '../..', 'calendar-frontend/public'),}),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}