import db from "#db/client";

export async function createProduct(productName, productPrice) {
  const sql = `
  INSERT INTO products
    (name, price)
  VALUES
    ($1, $2)
  RETURNING *
  `;
  
  const {
    rows: [product],
  } = await db.query(sql, [productName, productPrice]);
  return product;
}
