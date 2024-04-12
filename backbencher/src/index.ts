import express, { Express, Response, Request } from "express";
import cors from "cors";
import { db } from "./db/client";
import { placement_details } from "./db/schema";
import { StatusCodes } from "http-status-codes";
import { count, eq, getTableColumns } from "drizzle-orm";
import * as swaggerUI from "swagger-ui-express";
import { default as swaggerDocument } from "./swagger.json";

const PORT = 8000;
const app: Express = express();

declare module "express-serve-static-core" {
  interface Request {
    useDb?: () => typeof db;
  }
}

app.use(cors());
app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument, { explorer: true }));
app.use(express.json());
app.use((req, _, next) => {
  req.useDb = () => db;
  next();
});

app.get("/api/placement/count", async (req: Request, res: Response) => {
  const year = Number.parseInt(String(req.query.year ?? ""));
  if (Number.isNaN(year)) return res.sendStatus(StatusCodes.BAD_REQUEST);
  const [{ count: record_count }] = (await req
    .useDb?.()
    .select({ count: count() })
    .from(placement_details)
    .where(eq(placement_details.year, year))) ?? [{ count: 0 }];
  return res.json({ ok: true, data: { count: record_count } });
});

app.get("/api/placement/:year([0-9]+)", async (req: Request, res: Response) => {
  const year = Number.parseInt(req.params.year);
  const page = Number.parseInt(String(req.query.page ?? "1"));
  const page_size = Number.parseInt(String(req.query.size ?? "10"));

  if (
    Number.isNaN(year) ||
    Number.isNaN(page_size) ||
    Number.isNaN(page) ||
    !page ||
    !page_size ||
    page_size > 100
  ) {
    return res.sendStatus(StatusCodes.BAD_REQUEST);
  }

  const { id: _, ...required_columns} = getTableColumns(placement_details);
  const records = await req
    .useDb?.()
    .select(required_columns)
    .from(placement_details)
    .where(eq(placement_details.year, year))
    .orderBy(placement_details.slno)
    .offset((page - 1) * page_size)
    .limit(page_size);
  return res.json({ ok: true, data: records });
});

app.get("/api/ping", (_, res: Response) => {
  res.json({ ok: true, data: "Hello World" });
});

app.listen(PORT, () => {
  console.log(`successfully started listening at ${PORT}`);
});
