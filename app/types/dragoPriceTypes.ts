// on api
export interface RawJSONTokenPriceProp {
  usd: number;
  sixhr: string;
}

// on controller
export interface DragonSoulTokenPriceProp {
  marketInfo: {
    marketPrice: number;
    sixhrchange: string;
  };
}

// on hooks and view
export interface DSTPriceOutput {
  marketPrice: number;
  initialPrice: number;
  sixhourschange: string;
}
