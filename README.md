<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center"> Api <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description
Api construída para conectar ao banco de dados Funcionários da aplicação front : DR Funcionários

## 🚀 Começando

Para iniciar : npm run start ou nest start
Watch mode:  npm run start:dev
instalar o doc MySql: npm install --save @nestjs/typeorm typeorm mysql2


## 🛠️ Pré - requisitos e construído com

- Node Js
- Framework: Nest;
- Linguagem: TypeScript;
- DataBase: MySql;
- Insomina: Aplicativo usado para teste em : GET, POST, PUT, DELETE e UPDATE



## End Points

- Listagem de funcionários
- Mostrar somente um dos funcionários pelo Id
- Editar funcionários
- Excluir um ou mais funcionários pelo ID

## Observações e aprendizagens :

Primeira Api criada. Com Nest me ajudou a entender como podemos criar uma Api com mais facilidade e quais são os tipos de arquivos que preciso para que possa funcionar. Cada programador tem seu jeito de organizar suas apis e o Nest traz diversas formas que auxiliam para essa criação. Mas os arquivos principais para criar uma APi são: 

- SERVER/ PROVIDERS = Para conectar ao seu banco de dados e montar seu servidor/provedores. Indicando : Type, Host, Port, UserName, Password e Database ;
- MODEL/ MODULE = Para definir um modelo básico de  possível requisições e respostas ao seu banco de dados, podendo até criar determinadas funções e ações, caso aquela requisição não venha com sucesso;
- CONTROLLER = Indicar a ação que será com alguma informação do tipo  GET, POST, PUT, DELETE...;
- ROUTES: Esse arquivo é interessante para criação de rotas e deixar mais organizado sua aplicação;

## COMO A APLICAÇÃO FOI CRIADA?

- Na pasta **Funcionario** foi Criado as arquivos padrões: Funcionarios, Controller, entity, module, providers e  service.
-  Funcionários : informações principais que quero que tenha no banco de dados e seus tipos: 
    - name: string
    - cpf_cnpj: string
    - regime: string
    - funcao: string
    - email: string
    - telefone: string
    - telefone2: string

- Controller: Modelo básico para os back points de controle das resquisões, promessas de respostas e tipos :GET, POST, PUT e DELETE
- Entity: As colunas que estarão armazenadas no banco
- Module: Para ficar um código mais limpo, defini como cada elemento irá se comportar
- Providers: Para ficar um código mais limpo, conectei com o repositório para pegar informações
- Service: Aqui onde a ação começa a trazer resultados dos back points 

## ✒️ Autores


* Carol Santos 
