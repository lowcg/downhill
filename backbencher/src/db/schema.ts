import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const placement_details = pgTable("placement_details", {
  id: serial("id").primaryKey(),
  year: integer("year").notNull(),
  slno: integer("sl_no").notNull(),
  uniroll: varchar("university_roll", { length: 30 }).notNull(),
  student_name: varchar("student_name", { length: 200 }).notNull(),
  branch: varchar("branch", { length: 10 }).notNull(),
  company: varchar("company_name", { length: 200 }).notNull(),
});

export type PlacementDetailModel = InferSelectModel<typeof placement_details>
export type PlacementDetailInsertModel = InferInsertModel<typeof placement_details>;