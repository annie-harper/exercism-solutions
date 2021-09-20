export const gigasecond = (date) => {
  let endDate = new Date(date).getTime() + Math.pow(10, 12);
  return new Date(endDate);
};