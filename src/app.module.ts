import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActivityLog } from './log.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_LOG_HOST'),
        port: configService.get<number>('DB_LOG_PORT'),
        username: configService.get<string>('DB_LOG_USERNAME'),
        password: configService.get<string>('DB_LOG_PASSWORD'),
        database: configService.get<string>('DB_LOG_DATABASE'),
        entities: [ActivityLog],
        synchronize: true,
      }),
    }),
    TypeOrmModule.forFeature([ActivityLog]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
