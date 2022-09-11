import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database.module';
import { EmpresaModule } from './empresa/empresa.module';
import { ColaboradorModule } from './colaborador/colaborador.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    DatabaseModule,
   /* TypeOrmModule.forRoot({
      autoLoadEntities: true,
    }),*/
    EmpresaModule,
    ColaboradorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
