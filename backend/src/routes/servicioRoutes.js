import { Router } from "express";
import servicioController from "../controllers/ServicioController.js";

const router = Router();

router.get("/", servicioController.getAll);
router.get("/:id", servicioController.getById);
router.post("/", servicioController.create);
router.put("/:id", servicioController.update);
router.delete("/:id", servicioController.delete);

export default router;
