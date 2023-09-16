import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  @Get()
  asdf(): string {
    return 'get triggered... what now?';
  }
  @Get('lol')
  fdsa(): string {
    return 'fdsafdsa';
  }
}
