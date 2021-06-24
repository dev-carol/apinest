import { Connection } from 'typeorm';
import { Funcionario } from './funcionario.entity';

export const FuncionarioProviders = [
  {
    provide: 'FUNCIONARIO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Funcionario),
    inject: ['DATABASE_CONNECTION'],
  },
];