// pages/api/members.js
import pool from "@/lib/db";

export default async function handler(req, res) {
  try {
    const result = await pool.query("SELECT * FROM organization_members");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
