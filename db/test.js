// test.js
import sql from "./db.js";

const testConnection = async () => {
  const result = await sql`SELECT NOW()`;
  console.log("Connected! Time:", result[0].now);
};

testConnection();
