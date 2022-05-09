import { Router } from "express";
import CategoriesController from "../controllers/categories.controller";

const categoriesRouter = Router();

const categoriesController = new CategoriesController();

categoriesRouter.post("", categoriesController.store);
categoriesRouter.get("", categoriesController.index);
categoriesRouter.get("/:id", categoriesController.show);
categoriesRouter.patch("/:id", categoriesController.update);
categoriesRouter.delete("/:id", categoriesController.delete);

export default categoriesRouter;
