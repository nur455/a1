import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  const startMessage =
    `agis-bil3-main start period=${global.period} ` +
    `on port=${global.fileConfig.port} ` +
    `db3=${global.fileConfig.db3.host}:${global.fileConfig.db3.port}:${global.fileConfig.db3.dbname} ` +
    `db2=${global.fileConfig.db2.host}:${global.fileConfig.db2.port}:${global.fileConfig.db2.dbname} ` +
    `auth=${global.fileConfig.auth.host}:${global.fileConfig.auth.port} `;
  const a = 5;
  console.log('start', startMessage, a);
  const b = 6;
  console.log('branch2', startMessage, a, b);
}
bootstrap();
