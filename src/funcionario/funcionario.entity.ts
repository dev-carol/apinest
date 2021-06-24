import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Funcionario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column()
  cpf_cnpj: string;

  @Column()
  regime: string;

  @Column()
  funcao: string;

  @Column()
  email: string;

  @Column()
  telefone: string

  @Column()
  telefone2: string
}