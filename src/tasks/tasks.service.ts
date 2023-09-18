
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

    async getTask(_id: number): Promise<Task[]> {
        return await this.tasksRepository.find({
            select: ["id", "content", "done"],
            where: [{ "id": _id }]
        });
    }

//     const testEntityId = 1;

// await this.testEntityRepo.update(testEntityId, {
//    name: 'Example 2'
// })

    async completeTask(_id: number, content: string, done: boolean) {
        console.log('backend id=', _id)
        console.log('backend content=', content)
        console.log('backend done=', done)

        var task: Task = {"id":_id,
        "content":content,
    "done":true}

        // this.tasksRepository.update(task)
        return await this.tasksRepository.update(_id, {
            // "id": _id,
            // "content": content,
            "done": true
        });
    }
    // async completeTask(task: Task) {
    //     task.done = true;
    //     console.log(task.id)
    //     console.log(task.content)
    //     console.log(task.done)
    //     this.tasksRepository.save(task);
    // }

    async deleteTask(task: Task) {
        this.tasksRepository.delete(task);
    }
}