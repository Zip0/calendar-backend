import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Document } from "mongoose";

// export type TaskDocument = HydratedDocument <Task>;
export type TaskDocument = Task & Document;

@Schema()
export class Task {
  @Prop()
  id: number;

  @Prop({nullable: true})
  content: string;

  @Prop()
  done: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);