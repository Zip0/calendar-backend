import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from '../entities/task.entity';

@Controller('tasks')
export class TasksController {

    constructor(private service: TasksService) { }

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

    @Put()
    update(@Body() task: Task) {
        return this.service.updateTask(task);
    }

    @Delete(':id')
    deleteTask(@Param() params) {
        return this.service.deleteTask(params.id);
    }
}