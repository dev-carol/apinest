import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FuncionarioModule } from './funcionario/funcionario.module';

@Module({
  imports: [FuncionarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
