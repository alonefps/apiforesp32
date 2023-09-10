import { fastify } from "fastify";
import fastifyCors from "fastify-cors";

const server = fastify();

server.register(fastifyCors, {
  origin: "*",
});

let temperatura = 0;
let umidade = 0;
let data = 0; 

server.post("/data", async (request, reply) => {
  const { temperatura: newTemperatura, umidade: newUmidade, data: newData } = request.body;

  console.log("Dados recebidos via POST:");
  console.log(`Temperatura: ${newTemperatura}°C`);
  console.log(`Umidade: ${newUmidade}%`);
  console.log(`Data: ${newData}`);

  temperatura = newTemperatura;
  umidade = newUmidade;
  data = newData;

  reply.code(201).send({ message: "Dados recebidos com sucesso!" });
});

server.get("/data", async (request, reply) => {
  return reply.code(200).send({ temperatura, umidade, data });
});

server.listen(
  {
    host: "0.0.0.0",
    port: process.env.PORT ?? 3333,
  },
  (err) => {
    if (err) {
      console.error("Erro ao iniciar o servidor:", err);
      process.exit(1);
    }
    console.log("Servidor iniciado na porta 3333");
  }
);
