export interface DragoLair {
  status: number;
  joinDate: Date;
  lairId: string;
  leaveDate?: Date;
}

export interface DragoRentStats {
  currentDSA: number;
  currentGathering: number;
  currentProfit: number;
  totalRental: number;
  totalDSA: number;
  totalGathering: number;
  totalProfit: number;
  unclaimedProfit: number;
}

export interface DragoRent {
  status: string;
  expireDate: Date;
  from: string;
  profitShareRatio: number;
  startDate: Date;
  stats: DragoRentStats;
  to: string;
}

export interface DragoParents {
  0: number;
  1: number;
}

export interface DragoApiCache<T> {
  etag: string;
  data: T; // T is use in generic placeholder in Typescript
}

export interface DragoInfo {
  _id: number; // because json data has _id attribute
  lair: DragoLair; // this returns an object only
  rent: DragoRent; // this returns an object only
  network: number;
  status: number;
  breed: number;
  fusion: number;
  block: number;
  parents: DragoParents; // this returns an object only
  level: number;
  xp: number;
  tokenId: number;
  owner: string;
  grade: number;
  dragoImageURL: string;
  stats: DragoRentStats;
}
