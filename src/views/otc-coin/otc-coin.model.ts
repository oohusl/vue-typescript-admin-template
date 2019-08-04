export const enum CoinType {
  COMMON = 'COMMON',
  ANCHOR = 'ANCHOR'
}

export const enum BCPlatform {
  ETHEREUM = 'ETHEREUM',
  BITCOIN = 'BITCOIN'
}

export const enum NormalStatus {
  ENABLED = 'ENABLED',
  DISABLED = 'DISABLED',
  EXPIRED = 'EXPIRED'
}

export interface IOTCCoin {
  id?: number;
  coin?: string;
  coinType?: CoinType;
  bcPlatform?: BCPlatform;
  address?: string;
  status?: NormalStatus;
  minChargeAmount?: number;
  minCashAmount?: number;
  minFee?: number;
  maxFee?: number;
  sortSequence?: number;
}

export class OTCCoin implements IOTCCoin {
  constructor(
    public id?: number,
    public coin?: string,
    public coinType?: CoinType,
    public bcPlatform?: BCPlatform,
    public address?: string,
    public status?: NormalStatus,
    public minChargeAmount?: number,
    public minCashAmount?: number,
    public minFee?: number,
    public maxFee?: number,
    public sortSequence?: number
  ) {}
}
