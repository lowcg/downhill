import { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();

const { DB_URL } = process.env;
if (!DB_URL) {
  throw new Error(
    "Field DB_URL containing the connection string not defined in .env file"
  );
}

export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DB_URL ?? "",
  },
} satisfies Config;
