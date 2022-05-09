import database from "../../database";

const listSingleProductsService = async ({ id }) => {
  try {
    const res = await database.query("SELECT * FROM products WHERE id = $1", [
      id,
    ]);
    if (!res.rows.length) {
      throw new Error("Not found products");
    }

    return res.rows[0];
  } catch (err) {
    throw new Error(err.message);
  }
};

export default listSingleProductsService;
