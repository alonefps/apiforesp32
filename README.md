# ESP32 Data Sending API


## Descrição

Esta é uma API simples desenvolvida para permitir que o seu dispositivo ESP32 envie dados de temperatura, umidade e data para um servidor web. A API utiliza o framework Fastify e suporta operações POST e GET para coleta e recuperação de dados.

## Funcionalidades

- **Enviar Dados (POST)**: Permite enviar dados de temperatura, umidade e data para o servidor.

- **Obter Dados (GET)**: Possibilita recuperar os dados de temperatura, umidade e data armazenados no servidor.

## Endpoints da API

### 1. Enviar Dados (POST)

- **Rota:** `/data`
- **Método:** POST
- **Corpo da Requisição (JSON):** 

  ```json
  {
   "temperatura": 25.5,
    "umidade": 50,
    "data": "2023-09-10T12:00:00"
  }
  ```
- **Resposta de Sucesso (201 Created):**

  ```json
  {
   "message": "Dados recebidos com sucesso!"
  }
  ```

### 2. Obter Dados (GET)

Rota: /data
Método: GET

Resposta de Sucesso (200 OK):
```
{
  "temperatura": 25.5,
  "umidade": 50,
  "data": "2023-09-10T12:00:00"
}
```

### Configuração do Servidor
O servidor está configurado para permitir solicitações de qualquer origem devido à configuração de CORS.

## Executando o Servidor
Para iniciar o servidor, execute o seguinte comando:

```
npm start
```

O servidor estará disponível em http://localhost:3333 por padrão, a menos que você especifique uma porta diferente através da variável de ambiente PORT.

## Pré-requisitos
Antes de usar esta API, certifique-se de ter as seguintes dependências instaladas:

[![Node.js](https://nodejs.org/pt-br)
[![npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para melhorar esta API ou relatar problemas.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para obter mais detalhes.
