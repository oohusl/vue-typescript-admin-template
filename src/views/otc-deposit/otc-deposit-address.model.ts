export const enum BCPlatform {
  ETHEREUM = 'ETHEREUM',
  BITCOIN = 'BITCOIN'
}

export interface IOTCDepositAddress {
  id?: number;
  login?: string;
  coin?: string;
  platform?: BCPlatform;
  address?: string;
  createTimestamp?: Date;
}

export class OTCDepositAddress implements IOTCDepositAddress {
  constructor(
    public id?: number,
    public login?: string,
    public coin?: string,
    public platform?: BCPlatform,
    public address?: string,
    public createTimestamp?: Date
  ) {}
}
