export const paginate = (data: any[]) => {
  const itemsPerPage = 12;
  const pages = Math.ceil(data.length / itemsPerPage);

  const newItems = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data.slice(start, start + itemsPerPage);
  });

  return newItems;
};
