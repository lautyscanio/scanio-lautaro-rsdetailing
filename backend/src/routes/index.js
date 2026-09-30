import { Router } from "express";
import authRoutes from "./authRoutes.js";
import servicioRoutes from "./servicioRoutes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/servicios", servicioRoutes);

export default router;
