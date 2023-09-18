import { Injectable, Catch, ExceptionFilter, ArgumentsHost, ConflictException, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, QueryFailedError } from 'typeorm';
import { Task } from '../entities/task.entity';

@Injectable()
export class TasksService {

    constructor(@InjectRepository(Task) private tasksRepository: Repository<Task>) { }

    async createTask(task: Task) {
        this.tasksRepository.save(task).catch(err => {
            throw new HttpException({
                message: err.message
            }, HttpStatus.BAD_REQUEST);
        });
    }

    async getTasks(): Promise<Task[]> {
        return await this.tasksRepository.find({
            select: ["id", "content", "done"],
        }).catch(err => {
            throw new HttpException({
                message: err.message
            }, HttpStatus.BAD_REQUEST);
        });
    }

    async getTask(_id: number): Promise<Task[]> {
        return await this.tasksRepository.find({
            select: ["id", "content", "done"],
            where: [{ "id": _id }]
        }).catch(err => {
            throw new HttpException({
                message: err.message
            }, HttpStatus.BAD_REQUEST);
        })
    }

    async completeTask(_id: number) {
        return await this.tasksRepository.update(_id, {
            "done": true
        }).catch(err => {
            throw new HttpException({
                message: err.message
            }, HttpStatus.BAD_REQUEST);
        });;
    }

    async deleteTask(task: Task) {
        this.tasksRepository.delete(task).catch(err => {
            throw new HttpException({
                message: err.message
            }, HttpStatus.BAD_REQUEST);
        });;
    }
}