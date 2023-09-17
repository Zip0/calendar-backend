import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 1000, nullable: true})
    content:string;

    @Column({default: false}) 
    done:boolean;
}