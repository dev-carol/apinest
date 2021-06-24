import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { FuncionarioController } from './funcionario.controller';
import { FuncionarioProviders } from './funcionario.providers';
import { FuncionarioService } from './functionario.service';

@Module({
  imports: [DatabaseModule],
  controllers: [FuncionarioController],
  providers: [
    ...FuncionarioProviders,
    FuncionarioService,
  ],
})
export class FuncionarioModule {}