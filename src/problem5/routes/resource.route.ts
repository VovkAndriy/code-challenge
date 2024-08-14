import { Router } from "express";
import ResourceController from "../controllers/resource.controller";

const router = Router();
const resourceController = new ResourceController();

router.post("/create", resourceController.createResource);
// router.get("/get-all", resourceController.listResources);
// router.get("/:id", resourceController.getResource);
// router.put("/:id", resourceController.updateResource);
// router.delete("/:id", resourceController.deleteResource);

export default router;
