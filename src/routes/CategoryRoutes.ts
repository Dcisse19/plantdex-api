import { Router } from "express";
import CategoryController from "../controllers/CategoryController";
import checkToken from "../middlewares/CheckToken";

const categoryRouter = Router();
const categoryController = new CategoryController();

categoryRouter.get("/", (req, res) => {
  console.log("CategoryRouter");
  categoryController.getAll(req, res);
});

categoryRouter.get("/:id", (req, res) => {
  console.log("CategoryRouter");
  categoryController.getById(req, res);
});

categoryRouter.post("/", checkToken, (req, res) => {
  console.log("CategoryRouter");
  categoryController.create(req, res);
});

categoryRouter.put("/:id", checkToken, (req, res) => {
  console.log("CategoryRouter");
  categoryController.update(req, res);
});

categoryRouter.delete("/:id", checkToken, (req, res) => {
  console.log("CategoryRouter");
  categoryController.delete(req, res);
});

export default categoryRouter;
