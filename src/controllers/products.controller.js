import createProductsService from "../services/products/createProducts.service";
import deleteProductsService from "../services/products/deleteProducts.service";
import listProductsCategoryService from "../services/products/listProductCategory.service";
import listProductsService from "../services/products/listProducts.service";
import listSingleProductsService from "../services/products/listSingleProducts.service";
import updateProductService from "../services/products/updateProduct.service";

export default class ProductsController {
  async store(request, response) {
    const { name, price, category_id } = request.body;

    try {
      const product = await createProductsService({ name, price, category_id });
      return response
        .status(201)
        .json({ message: "Product created", product: product });
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }
  async index(request, response) {
    try {
      const products = await listProductsService();

      return response.status(200).json(products);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }
  async show(request, response) {
    const { id } = request.params;
    try {
      const product = await listSingleProductsService({ id });
      return response.status(200).json(product);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }
  async update(request, response) {
    const { id } = request.params;
    const { name, price, category_id } = request.body;

    try {
      const product = await updateProductService({
        id,
        name,
        price,
        category_id,
      });

      return response
        .status(200)
        .json({ message: "Product update", product: product });
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }
  async delete(request, response) {
    const { id } = request.params;

    try {
      const product = await deleteProductsService({ id });

      return response
        .status(200)
        .json({ message: "Product deleted", product: product });
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async productCategory(request, response) {
    const { category_id } = request.params;

    try {
      const product = await listProductsCategoryService({ category_id });
      return response.status(200).json(product);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }
}
