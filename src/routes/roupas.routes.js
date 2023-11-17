import { Router } from "express";
import {
    getRoupas,
    getRoupaById,
    createRoupa,
    updateRoupa,
    deleteRoupa,
} from "../controllers/roupas.controller.js"

const roupasRouter = Router();

roupasRouter.get("/", getRoupas)

roupasRouter.get("/:id", getRoupaById);

roupasRouter.post("/", createRoupa);

roupasRouter.put("/:id", updateRoupa);

roupasRouter.delete("/:id", deleteRoupa);

export default roupasRouter;