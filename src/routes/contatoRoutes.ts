import { Router } from "express";
import { criarContato, listarContatos } from "../controllers/contatoController";

const router = Router();

router.post("/", criarContato);
router.get("/", listarContatos);

export default router;
