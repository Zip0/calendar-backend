import { Controller, Post, Body, Get, Put, Delete, Param, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from '../entities/task.entity';

@Controller('tasks')
export class TasksController {

    constructor(private service: TasksService) { }

    @Patch(":id")
    complete(@Param() params) {
        return this.service.completeTask(params.id);
    }

    @Get('all')
    getAll() {
        return this.service.getTasks();
    }

    @Get(':id')
    get(@Param() params) {
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