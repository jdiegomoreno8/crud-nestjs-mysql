import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { Cat } from './cats/entities/cat.entity';

@Module({
  imports: [  CatsModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3307,
      username: "Juan_crud",
      password: "root123",
      database: "db_nestjs",
      autoLoadEntities: true,
      synchronize: true,
    }),
    //TypeOrmModule.forFeature([Cat]), 
    // Aquí usas la entidad en tu módulo
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
