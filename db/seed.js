import db from "#db/client";
import { createUser } from "#db/queries/users";
import { createProduct } from "./queries/products.js";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  await createUser("foo", "bar");

  await createProduct('bunny plushie', 1000);
  await createProduct('bunny', 3200);
  await createProduct('chocolate bunny', 200);
}
