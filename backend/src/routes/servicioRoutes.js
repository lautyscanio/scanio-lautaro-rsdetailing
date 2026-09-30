import { Router } from "express";
import servicioController from "../controllers/ServicioController.js";
import requireAuth from "../middlewares/requireAuth.js";

const router = Router();

// La lectura es pública (la usa la landing); modificar datos requiere iniciar sesión.
router.get("/", servicioController.getAll);
router.get("/:id", servicioController.getById);
router.post("/", requireAuth, servicioController.create);
router.put("/:id", requireAuth, servicioController.update);
router.delete("/:id", requireAuth, servicioController.delete);

export default router;
