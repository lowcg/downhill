import axios from "axios";
axios.defaults.baseURL = "http://www.localhost:8000/";

export async function fetchPlacementCount({ year }) {
  const { data } = await axios.get("/api/placement/count", {
    params: { year },
  });
  if (!data.ok) {
    throw new Error("failed to fetch data");
  }
  console.log(data.data.count);
  return data.data.count;
}

export async function fetchPlacementData({ year, page, size }) {
  const { data } = await axios.get("/api/placement/" + year, {
    params: { page, size },
  });
  if (!data.ok) {
    throw new Error("failed to fetch data");
  }
  return data.data;
}
