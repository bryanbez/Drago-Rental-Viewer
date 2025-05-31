export const sumField = <T>(items: T[], getAmount: (item: T) => number): number => {
  return items.reduce((sum, item) => sum + getAmount(item), 0);
};
