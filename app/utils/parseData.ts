// utils/parseData.ts
// import Papa from "papaparse";
import Papa from "papaparse";

const parseCSVData = async () => {
  const response = await fetch("/weblog.csv");
  const csv = await response.text();
  const parsedData = Papa.parse(csv, { header: true }).data;
  return parsedData;
};

export default parseCSVData;
