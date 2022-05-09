import createCategoryService from "../services/categories/createCategory.service";
import deleteCategorySevice from "../services/categories/deleteCategory.service";
import listCategoryService from "../services/categories/listCategory.service";
import listSingleCategoryService from "../services/categories/listSingleCategory.service";
import updateCategoryService from "../services/categories/updateCategory.service";

export default class CategoriesController {
  async store(request, response) {
    const { name } = request.body;

    try {
      const category = await createCategoryService({ name });
      return response
        .status(201)
        .json({ message: "Category created", category: category });
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async index(request, response) {
    try {
      const categories = await listCategoryService();

      return response.status(200).json(categories);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async show(request, response) {
    const { id } = request.params;
    try {
      const category = await listSingleCategoryService({ id });
      return response.status(200).json(category);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }
  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    try {
      const category = await updateCategoryService({ id, name });

      return response
        .status(200)
        .json({ message: "Category update", category: category });
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }
  async delete(request, response) {
    const { id } = request.params;

    try {
      const category = await deleteCategorySevice({ id });
      return response
        .status(200)
        .json({ message: "Category deleted", category: category });
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }
}
