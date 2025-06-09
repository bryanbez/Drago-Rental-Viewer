export const shortenWalletAddress = (walletAddress: string) => {
  const startLenght = 8;
  const endLength = 6;

  if (walletAddress.length <= startLenght + endLength) {
    return walletAddress;
  }

  const start = walletAddress.slice(0, startLenght);
  const end = walletAddress.slice(-endLength);
  return `${start}.....${end}`;
};
