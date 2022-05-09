import database from "../../database";

const updateProductService = async ({ id, name, price, category_id }) => {
  try {
    const res = await database.query("SELECT * FROM products WHERE id = $1", [
      id,
    ]);
    if (!res.rows.length) {
      throw new Error("Not found products");
    }

    const product = res.rows[0];

    const updateProduct = await database.query(
      "UPDATE products SET name = $1, price = $2, category_id = $3 WHERE id = $4 RETURNING *",
      [
        name || product.name,
        price || product.price,
        category_id || product.category_id,
        id,
      ]
    );
    return updateProduct.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default updateProductService;
