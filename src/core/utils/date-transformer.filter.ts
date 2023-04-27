export const dateToYear = (date: string) => {
  const year = new Date(date).getFullYear();
  return year;
};
