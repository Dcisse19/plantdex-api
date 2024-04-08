import { Router } from "express";
import PlantController from "../controllers/PlantController";

const plantRouter = Router();
const plantController = new PlantController();

plantRouter.get("/", (req, res) => {
  console.log("PlantRouter");
  plantController.getAll(req, res);
});

plantRouter.get("/:id", (req, res) => {
  console.log("PlantRouter");
  plantController.getById(req, res);
});

plantRouter.post("/", (req, res) => {
  console.log("PlantRouter");
  plantController.create(req, res);
});

plantRouter.put("/:id", (req, res) => {
  console.log("PlantRouter");
  plantController.update(req, res);
});

plantRouter.delete("/:id", (req, res) => {
  console.log("PlantRouter");
  plantController.delete(req, res);
});

export default plantRouter;
