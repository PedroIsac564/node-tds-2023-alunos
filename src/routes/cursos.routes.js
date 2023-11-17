import { Router } from "express";
import {
    getCursos,
    getCursosById,
    createCurso,
    updateCurso,
    deleteCurso,
} from "../controllers/cursos.controller.js"

const cursoRouter = Router();

cursoRouter.get("/", getCursos)

cursoRouter.get("/:id", getCursosById);

cursoRouter.post("/", createCurso);

cursoRouter.put("/:id", updateCurso);

cursoRouter.delete("/:id", deleteCurso);

export default cursoRouter;