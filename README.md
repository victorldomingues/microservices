# Minicurso Arquitetura de Microserviços com Node.js
Código fonte do minicurso de Arquitetura de Microserviços com node.js

## Apresentação Teórica

- Objetivo do curso	

- Introdução	

- Arquitetura Monolítica / Monolithic Architecture	

- Arquitetura de Microserviços / Microservices Architecture	

- Node.js	

- Implementação de Microserviços com Node.js [Código fonte](https://github.com/victorldomingues/microservices)

[Continue lendo](https://github.com/victorldomingues/microservices/raw/master/Arquitetura%20de%20Microservi%C3%A7os%20com%20Node.pptx)

## Pré-configuração e instalação do ambiente.

Node.js -  Tecnologia de servidor utilizada
[Download](https://nodejs.org/en/download/)

RabbitMQ -  Tecnologia utilizada para a troca de mensagens entre serviços 
[Download](https://www.rabbitmq.com/download.html)

Docker
[Download](https://www.docker.com/community-edition)

Visual Studio Code - Opcional
[Download](https://code.visualstudio.com/download)

## Rodando a aplicação

Interface web
./web

> npm install

> node app

API - Produtos
./api/api.procuts

> npm install

> node app

API - Vendas
./api/api.sales

> npm install

> node app

## Docker compose
> docker-compose up --build



