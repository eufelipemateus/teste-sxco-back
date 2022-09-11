import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empresa } from './empresa/entities/empresa.entity';
import { Colaborador } from './colaborador/entities/colaborador.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: configService.get('database').host,
        host: configService.get('database').host,
        port: configService.get('database').port,
        username: configService.get('database').user,
        password: configService.get('database').password,
        database: configService.get('database').database,
        entities: [Empresa, Colaborador],
        synchronize: true,
        autoLoadEntities: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
