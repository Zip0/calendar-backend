import { Controller, Get, Param, Post, Body, Query, Delete, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import {
    Injectable
  } from '@nestjs/common';
import {
    InjectModel
  } from '@nestjs/mongoose';
  import {
    Model
  } from 'mongoose';
import {
  Task,
  TaskDocument
} from './schemas/task.schema';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}


    @Post()
    create(@Body() createTaskDto: CreateTaskDto) {
      return this.tasksService.create(createTaskDto);
    }


    @Get()


    // async create(createTaskDto: CreateTaskDto): Promise < TaskDocument > {
    //     const task = new this.taskModel(createTaskDto);
    //     return task.save();
    // }
    // async create(@Body() createTaskDTO: CreateTaskDTO) {
    //     const task = await this.tasksService.create(createTaskDTO);
    //     return 'task created: ' + task;
    // }
    // @Get()
    // async getTasks() {
    //     const tasks = await this.tasksService.getTasks();
    //     return tasks;
    // }
    @Get('all')
    async findAll() {
        const tasks = await this.tasksService.findAll();
        return tasks;
    }

    @Get('test')
    async test() {
        
        return 'tasks oh wow';
    }

    @Get(':taskID')
    async getTask(@Param('taskID') taskID) {
        const task = await this.tasksService.getTask(taskID);
        console.log(task);
        return task;
    }

    // @Post()
    // async create(@Body() createTaskDTO: CreateTaskDTO) {
    //     const task = await this.tasksService.create(createTaskDTO);
    //     return task;
    // }
    @Post()
    async addTask(@Body() CreateTaskDTO: CreateTaskDto) {
        const task = await this.tasksService.addTask(CreateTaskDTO);
        return task;
    }

    @Delete()
    async deleteTask(@Query() query) {
        const tasks = await this.tasksService.deleteTask(query.taskID);
        return tasks;
    }
}