import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Funcionario as funcionarioDTO } from './funcionario';
import { Funcionario } from './funcionario.entity';

@Injectable()
export class FuncionarioService {

  constructor(
    @Inject('FUNCIONARIO_REPOSITORY')
    private funcionarioRepository: Repository<Funcionario>,
  ) {}

  async findAll(): Promise<Funcionario[]> {
    return this.funcionarioRepository.find();
  }

  async findOne(id: number): Promise<Funcionario>{
    return this.funcionarioRepository.findOne(id)
  }

  async criarFuncionario(data: funcionarioDTO): Promise<any>{
    this.funcionarioRepository.save(data)
  }

  async editarFUncionario(id, data: funcionarioDTO): Promise<any>{
    this.funcionarioRepository.update(id, data)
  }

  async deletarFuncionario(dataId: number): Promise<any>{
     return this.funcionarioRepository.delete(dataId)
  }

}