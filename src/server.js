import express from "express";
import { config } from "dotenv";
import rotas from "./routes/index.routes.js";
config();

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  const { dia } = req.query; // Desestruturação
  return res.status(200).send({ message: "Hoje e " + dia });
});

app.get("/:mes", (req, res) => {
  const { mes } = req.params; // Desestruturação
  return res.status(200).send({ message: "Estamos em " + mes });
});

app.post("/", (req, res) => {
  const { nome, tipo, tamanho, cor, quantidade, imagemUrl } = req.body;

  if (!nome || !tipo || !tamanho || !cor || !quantidade || !imagemUrl) {
    return res.status(400).send({
      message: "Dados invalidos!"
    });
  }

  return res.status(200).send({ message: `Peça: ${nome} - Tipo: ${tipo} - Tamanho: ${tamanho} - Cor: ${cor} - Quantidade no estoque: ${quantidade} ${imagemUrl}` });
});

app.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nome, tipo, tamanho, cor, quantidade, imagemUrl } = req.body;

  if (!nome || !tipo || !tamanho || !cor || !quantidade || !imagemUrl) {
    return res.status(400).send({
      message: "Dados invalidos!"
    });
  }

  return res.status(200).send({ message: `Roupa ${id} atualizada` });
});

app.delete("/:id", (req, res) => {
  const { id } = req.params;

  return res.status(200).send({ message: `Roupa ${id} deletado` });
});


app.use(rotas);
app.listen(port, () =>
  console.log(`⚡ Server started on http://localhost:${port}`)
);