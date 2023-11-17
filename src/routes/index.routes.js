import { Router } from "express";
import studentsRouter from "./students.routes.js";
import cursoRouter from "./cursos.routes.js";
import roupasRouter from "./roupas.routes.js";
const rotas = Router();

rotas.use("/students", studentsRouter);
rotas.use("/cursos", cursoRouter);
rotas.use("/roupas", roupasRouter);

rotas.get("/", (req, res) => {
    return res.status(200).send(
        { message: "Servidor rodando perfeitamente!" }
    );
});

export default rotas;