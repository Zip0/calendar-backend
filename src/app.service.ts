import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';


@Injectable()
export class AppService {

  constructor() {}
  // constructor(@InjectConnection() private connection: Connection) {}
  
  // getHello(): string {
  //   return 'Hello World!';
  // }
  
  // showReact() {
  //   return 'showReact';
  // }
  
}
