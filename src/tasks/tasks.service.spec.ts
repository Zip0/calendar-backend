import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { Repository } from 'typeorm';
import { Task } from 'src/entities/task.entity';
import { TasksController } from './tasks.controller';
import { CreateTaskDto } from './dto/create-task.dto';
import { getModelToken } from '@nestjs/mongoose';



// describe('TasksService', () => {
//   let service: TasksService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [TasksService],
//     }).compile();

//     service = module.get<TasksService>(TasksService);
//   });

//   it('should be defined', () => {
//     expect(service).toBeDefined();
//   });
// });