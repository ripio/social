/**
 *
 * @param arr array to chunk
 * @param chunkSize size of each chunk
 * @returns array of chunks
 */
const chunkArray = <T>(arr: T[], chunkSize: number): T[][] => {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    out.push(chunk);
  }

  return out;
};

export default chunkArray;
