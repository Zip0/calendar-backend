//[label /src/books/books.service.ts]

  import { Injectable, HttpException } from '@nestjs/common';
  import { Model } from 'mongoose';
  import { TASKS } from '../mocks/tasks.mock';
  import { InjectModel } from '@nestjs/mongoose';
  import { Task, TaskDocument } from './schemas/task.schema';
  import { CreateTaskDto } from './dto/create-task.dto';

  @Injectable()
  export class TasksService {
      tasks = TASKS;

      
      constructor(@InjectModel(Task.name) private readonly taskModel: Model < TaskDocument > ) {}


      async create(createTaskDto: CreateTaskDto): Promise < TaskDocument > {
        const task = new this.taskModel(createTaskDto);
        return task.save();
      }

      
    // async create(CreateTaskDTO: CreateTaskDto): Promise<Task> {
    //     const createdTask = new this.taskModel(CreateTaskDTO);
    //     console.log(createdTask);
        
        
        // return CreateTaskDTO;
        // return createdTask;
        // return createdTask.save();
    // }

    async findAll(): Promise<Task[]> {
        return this.taskModel.find().exec();
    }



      getTasks(): Promise<any> {
          return new Promise(resolve => {
              resolve(this.tasks);
          });
      }
      getTask(taskID): Promise<any> {
          let id = Number(taskID);
          return new Promise(resolve => {
              const task = this.tasks.find(task => task.id === id);
              if (!task) {
                  throw new HttpException('Task does not exist!', 404);
              }
              resolve(task);
          });
      }
      addTask(task): Promise<any> {
        return new Promise(resolve => {
            this.tasks.push(task);
            resolve(this.tasks);
        });
        
    }
    deleteTask(taskID): Promise<any> {
        let id = Number(taskID);
        return new Promise(resolve => {
            let index = this.tasks.findIndex(task => task.id === id);
            if (index === -1) {
                throw new HttpException('Task does not exist!', 404);
            }
            this.tasks.splice(1, index);
            resolve(this.tasks);
        });
    }
  }