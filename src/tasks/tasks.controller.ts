import { Controller, Post, Body, Get, Put, Delete,Param, Patch} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from '../entities/task.entity';
import { FindOneAndUpdateOptions } from 'typeorm';

@Controller('tasks')
export class TasksController {

    constructor(private service: TasksService) { }

    @Patch(":id/:content/:done")
    update(@Param() params) {
        return this.service.completeTask(params.id, params.content, params.done);
    }

    @Get('all')
    getAll() {
        // return this.service.getTask(5);
        return this.service.getTasks();
    }

    @Get(':id')
    get(@Param() params) {
        // return params.id;
        return this.service.getTask(params.id);
    }


    @Post()
    create(@Body() task: Task) {
        return this.service.createTask(task);
    }


    @Delete(':id')
    delete(@Param() params) {
        return this.service.deleteTask(params.id);
    }
}