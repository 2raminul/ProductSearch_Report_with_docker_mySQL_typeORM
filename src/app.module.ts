import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as config from './config/database.config';
import { Database } from './enums/database.enum';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      ...config,
      type: Database.Mysql,
    }),
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
