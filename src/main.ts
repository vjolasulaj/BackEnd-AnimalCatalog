import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: 'http://localhost:5173',
    },
  });
  console.log({ x: process.env.DB_CONN_STRING });
  await app.listen(3000);
}
bootstrap();
