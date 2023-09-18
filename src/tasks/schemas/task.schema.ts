import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from "mongoose";

/*  Oversight from early development but it works.
*   TODO: Unify everything for TypeORM and remove unused dependencies
*/

export type TaskDocument = Task & Document;

@Schema()
export class Task {
  @Prop()
  id: number;

  @Prop({ nullable: true })
  content: string;

  @Prop()
  done: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);