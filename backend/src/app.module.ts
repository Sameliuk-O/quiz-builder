import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { QuizzesModule } from './quizzes/quizzes.module';
import * as process from 'node:process';

const DATABASE_PORT = process.env.DATABASE_PORT
  ? Number(process.env.DATABASE_PORT)
  : 5432;

const allowedDBTypes = [
  'postgres',
  'mysql',
  'mariadb',
  'cockroachdb',
  'sqlite',
  'mssql',
  'sap',
  'oracle',
  'cordova',
  'nativescript',
  'react-native',
  'sqljs',
  'mongodb',
  'aurora-mysql',
  'aurora-postgres',
  'expo',
  'better-sqlite3',
] as const;

type DatabaseType = (typeof allowedDBTypes)[number];

const DATABASE_TYPE = (
  process.env.DATABASE_TYPE &&
  allowedDBTypes.includes(process.env.DATABASE_TYPE as DatabaseType)
    ? process.env.DATABASE_TYPE
    : 'postgres'
) as DatabaseType;

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: DATABASE_TYPE,
      host: process.env.DATABASE_HOST || 'localhost',
      port: DATABASE_PORT,
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true,
    }),
    PrismaModule,
    QuizzesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
