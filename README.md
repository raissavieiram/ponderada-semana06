# Sistema de Gerenciamento de Tarefas

Este projeto é uma aplicação web que permite aos usuários criar, listar e gerenciar tarefas. A aplicação é dividida em um front-end que roda em uma instância EC2 da AWS e um back-end que se conecta a um banco de dados PostgreSQL hospedado em um serviço RDS da AWS.

## Descrição

O objetivo deste sistema é proporcionar uma interface simples e intuitiva para o gerenciamento de tarefas, possibilitando que os usuários mantenham o controle de suas atividades diárias com eficiência.

## Tecnologias Utilizadas

- **Front-end**: React
- **Back-end**: Node.js com Express
- **Banco de Dados**: PostgreSQL em um RDS da AWS
- **Hosting**: Front-end e Back-end hospedados em uma instância EC2 da AWS

## Estrutura de Pastas

O projeto está dividido em duas principais diretórios: `backend` e `frontend`.

- `backend`: Contém o código do servidor Node.js, incluindo os controladores, rotas e a conexão com o banco de dados.
  - `controllers`: Lógica de negócios para operações de CRUD nas tarefas.
  - `middlewares`: Middlewares de Express, incluindo CORS.
  - `repositories`: Arquivos relacionados ao banco de dados, incluindo operações de consulta.
  - `routes`: Definição das rotas da API REST.
- `frontend`: Código fonte da aplicação React.
  - `src`: Arquivos JavaScript e CSS que compõem a aplicação React.
  - `public`: Arquivos estáticos para a aplicação front-end.

## Configuração do Banco de Dados

A aplicação utiliza um banco de dados PostgreSQL para armazenar as informações das tarefas. Abaixo está o comando SQL para criar a tabela de tarefas:

```sql
CREATE TABLE tarefas (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT,
    categoria VARCHAR(100),
    concluida BOOLEAN NOT NULL DEFAULT FALSE
);
```

## Vídeo de demonstração

Aqui está o link para o vídeo de demonstração da aplicação:

https://drive.google.com/drive/folders/1YKEi9UD0PpU0EhRK_KtH1TXSf_0Taz4V?usp=sharing