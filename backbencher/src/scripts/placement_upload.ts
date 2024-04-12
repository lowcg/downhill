import { readdir } from "fs/promises";
import { PlacementDetailInsertModel, placement_details } from "../db/schema";
import path from "path";
import { createReadStream } from "fs";
import { parse } from "csv-parse";
import { db } from "../db/client";

function loadPlacementModelsFromCsv(
  fname: string
): Promise<[number, PlacementDetailInsertModel[]]> {
  return new Promise((resolve, reject) => {
    const year = Number.parseInt(fname.substring(0, 4));
    let entries: Array<PlacementDetailInsertModel> = [];
    createReadStream(path.join("./data", fname))
      .pipe(parse({ delimiter: ",", from_line: 2 }))
      .on("data", (r) => {
        const [slno, uniroll, student_name, branch, company] = r;
        const data: PlacementDetailInsertModel = {
          slno,
          year,
          student_name,
          uniroll,
          branch,
          company,
        };
        entries.push(data);
      })
      .on("error", (err) => {
        reject(new Error(`In file ${fname} ${err}`));
      })
      .on("end", () => {
        resolve([year, entries]);
      });
  });
}

async function uploadDetails(
  year: number,
  entries: PlacementDetailInsertModel[]
) {
  const res = await db.insert(placement_details).values(entries);
  if (res.rowCount != entries.length) {
    throw new Error(
      `ERR in year ${year}, failed to upload ${
        entries.length - (res.rowCount ?? 0)
      }`
    );
  }
}

async function main() {
  const fnames = await readdir("./data");
  let details: Map<number, PlacementDetailInsertModel[]> = new Map();
  for (const fname of fnames) {
    console.log(`Looking at ${fname} ...`);
    if (!fname.endsWith(".csv")) continue;
    const [year, entries] = await loadPlacementModelsFromCsv(fname);
    console.log(
      `Completed reading ${fname}... Year: ${year} Read: ${entries.length} entries`
    );
    details.set(year, entries);
  }
  // console.log(details);
  console.log("Starting insertion ...");
  for (let [year, entries] of details.entries()) {
    console.log(`Uploading details of ${year} ...`);
    await uploadDetails(year, entries);
    console.log(`Finished uploading details of ${year} ...`);
  }
  console.log("Exiting ...");
}

await main();
