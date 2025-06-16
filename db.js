// db.js
import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config(); // load .env file

const sql = postgres(process.env.DATABASE_URL, {
  ssl: "require", // penting untuk koneksi ke Supabase
});

export default sql;
