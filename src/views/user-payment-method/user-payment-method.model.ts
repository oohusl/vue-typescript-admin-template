export const enum PaymentMethod {
  ALIPAY = 'ALIPAY',
  WECHAT = 'WECHAT',
  BANK_CARD = 'BANK_CARD'
}

export const enum NormalStatus {
  ENABLED = 'ENABLED',
  DISABLED = 'DISABLED',
  EXPIRED = 'EXPIRED'
}

export interface IUserPaymentMethod {
  id?: number;
  login?: string;
  method?: PaymentMethod;
  cardNo?: string;
  accountName?: string;
  status?: NormalStatus;
  otcquote?: any;
}

export class UserPaymentMethod implements IUserPaymentMethod {
  constructor(
    public id?: number,
    public login?: string,
    public method?: PaymentMethod,
    public cardNo?: string,
    public accountName?: string,
    public status?: NormalStatus,
    public otcquote?: any
  ) {}
}
