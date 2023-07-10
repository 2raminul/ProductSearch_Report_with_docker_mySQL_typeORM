import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import ProductDataSeed from './seeds/product.json.data';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
  // before rurring the seed please pass true to the parameter
  await ProductDataSeed(false); // make it true for the first time
}
bootstrap();
