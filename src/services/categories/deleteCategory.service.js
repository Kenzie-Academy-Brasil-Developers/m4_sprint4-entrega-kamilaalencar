import database from "../../database";

const deleteCategorySevice = async ({ id }) => {
  try {
    const res = await database.query(
      "DELETE FROM categories WHERE id = $1 RETURNING *",
      [id]
    );
    if (!res.rows.length) {
      throw new Error("Category not found");
    }
    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default deleteCategorySevice;
