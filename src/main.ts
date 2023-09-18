import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const cors = require("cors");

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = {
    "origin": "http://localhost:3000",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    "credentials": true
  }
  app.enableCors(options)
  await app.listen(4000);
}
bootstrap();
