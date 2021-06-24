import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Funcionario } from './funcionario';
import { FuncionarioService } from './functionario.service';

@Controller()
export class FuncionarioController {
  constructor(private readonly funcionarioService: FuncionarioService) {}

  @Get('funcionarios')
  getFuncionarios(): Promise<any> {
    return this.funcionarioService.findAll();
  }

  @Get('funcionarios/:id')
  getFuncionariosById(@Param() params): Promise<any> {
      return this.funcionarioService.findOne(params.id)
  }

  @Post('funcionarios')
  postFuncionario(@Body() createFuncionario: Funcionario){
    return this.funcionarioService.criarFuncionario(createFuncionario)
  }

  @Put('funcionarios/:id')
  atualizarFuncionario(@Param() params, @Body() data){
      return this.funcionarioService.editarFUncionario(params.id, data)
  }

  @Delete('funcionarios')
  deleteFuncionariosById(@Body() dataId): Promise<any> {
    return this.funcionarioService.deletarFuncionario(dataId)
  }
}