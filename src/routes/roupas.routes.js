import { Router } from "express";
import {
    getRoupas,
    getRoupaById,
    createRoupa,
    updateRoupa,
    removeRoupa,
} from "../controllers/roupas.controller.js"

const roupasRouter = Router();

roupasRouter.get("/", getRoupas)

roupasRouter.get("/:id", getRoupaById);

roupasRouter.post("/", createRoupa);

roupasRouter.put("/:id", updateRoupa);

roupasRouter.delete("/:id", removeRoupa);

export default roupasRouter;