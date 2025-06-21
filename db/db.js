// // db.js
// import postgres from "postgres";
// import dotenv from "dotenv";

// dotenv.config(); // load .env file

// const sql = postgres(process.env.DATABASE_URL, {
//   ssl: "require", // penting untuk koneksi ke Supabase
// });

// export default sql;

// db.js
import postgres from "postgres";
import dotenv from "dotenv";

import path from "path";
import { fileURLToPath } from "url";

// Lokasi .env satu level di atas folder `db`
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const sql = postgres(process.env.DATABASE_URL); // tidak pakai SSL untuk lokal

export default sql;
