import pg from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import * as dotenv from "dotenv";
import * as schema from "./schema";

dotenv.config();

export const client = new pg.Client({
  connectionString: process.env.DB_URL,
  ssl: true,
});

await client.connect();
export const db = drizzle(client, { schema });
