import { Router } from "express";
import UserController from "../controllers/UserController";
import checkToken from "../middlewares/CheckToken";

const userRouter = Router();
const userController = new UserController();

userRouter.get("/", checkToken, (req, res) => {
  console.log("UserRouter");
  userController.getAll(req, res);
});

userRouter.get("/:id", (req, res) => {
  console.log("UserRouter");
  userController.getById(req, res);
});

userRouter.post("/signup", (req, res) => {
  console.log("UserRouter");
  userController.signup(req, res);
});

userRouter.post("/login", (req, res) => {
  console.log("UserRouterLogin");
  userController.login(req, res);
});

userRouter.put("/:id", checkToken, (req, res) => {
  console.log("UserRouter");
  userController.update(req, res);
});

userRouter.delete("/:id", checkToken, (req, res) => {
  console.log("UserRouter");
  userController.delete(req, res);
});

export default userRouter;
