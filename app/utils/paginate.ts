export function paginate<T>(data: T[], page: number, itemsPerPage: number): T[] {
  const startIndex = page * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return data.slice(startIndex, endIndex);
}
