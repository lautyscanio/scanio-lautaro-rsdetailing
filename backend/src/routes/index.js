import { Router } from "express";
import servicioRoutes from "./servicioRoutes.js";

const router = Router();

router.use("/servicios", servicioRoutes);

export default router;
