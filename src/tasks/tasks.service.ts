
import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../entities/task.entity';

@Injectable()
export class TasksService {

    constructor(@InjectRepository(Task) private tasksRepository: Repository<Task>) { }

    async createTask(task: Task) {
        this.tasksRepository.save(task)
    }

    async getTasks(): Promise<Task[]> {
        return await this.tasksRepository.find({
            select: ["id", "content", "done"],

        });
    }
    // async getTasks(task: Task): Promise<Task[]> {
    //     return await this.tasksRepository.find();
    // }

    async getTask(_id: number): Promise<Task[]> {
        return await this.tasksRepository.find({
            select: ["id", "content", "done"],
            where: [{ "id": _id }]
        });
    }

    async updateTask(task: Task) {
        this.tasksRepository.save(task)
    }

    async deleteTask(task: Task) {
        this.tasksRepository.delete(task);
    }
}