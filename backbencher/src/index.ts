import express, { Express, Response } from "express";
const PORT = 8000;
const app: Express = express();

app.get("/ping", (_, res: Response) => {
  res.json({ ok: true, msg: "Hello World" });
});

app.listen(PORT, () => {
  console.log(`successfully started listening at ${PORT}`);
});
