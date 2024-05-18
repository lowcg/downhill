import axios from "axios";
// axios.defaults.baseURL = "http://www.localhost:8000/";

const placementDataCache = {};

export async function fetchAllPlacementDetails(year) {
  if (placementDataCache[year]) { return placementDataCache[year]; }
  const { data } = await axios.get(`/assets/placement/${year}.json`)
  placementDataCache[year] = data;
  return data;
}

export async function fetchPlacementCount({ year }) {
  return (await fetchAllPlacementDetails(year)).length;
}

export async function fetchPlacementData({ year, page, size }) {
  const allData = await fetchAllPlacementDetails(year);
  const start = (page-1)*size;
  const end = start + size;
  return allData.slice(start, end);
}
