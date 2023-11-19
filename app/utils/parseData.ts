const parseCSVData = async () => {
  try {
    const response = await fetch("/weblog.csv");
    const text = await response.text();
    const parsedData = text.split("\n").map((line) => {
      const values = line.split(",");
      return {
        label: values[0],
        value: Number(values[1]),
      };
    });
    return parsedData;
  } catch (error) {
    console.error("Error parsing CSV data:", error);
    return [];
  }
};

export default parseCSVData;
