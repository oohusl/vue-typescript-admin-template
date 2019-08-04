import axios from 'axios';

import { IOTCDepositAddress } from './otc-deposit-address.model';

const baseApiUrl = 'uaa/api/deposit-addressa';

export default class OTCDepositAddressService {
  public find(id): Promise<IOTCDepositAddress> {
    return new Promise<IOTCDepositAddress>(resolve => {
      axios.get(`${baseApiUrl}/${id}`).then(function(res) {
        resolve(res.data);
      });
    });
  }

  public retrieve(paginationQuery?: any): Promise<any> {
    return new Promise<any>(resolve => {
      axios.get(baseApiUrl).then(function(res) {
        resolve(res);
      });
    });
  }

  public delete(id): Promise<any> {
    return new Promise<any>(resolve => {
      axios.delete(`${baseApiUrl}/${id}`).then(function(res) {
        resolve(res);
      });
    });
  }

  public create(entity): Promise<IOTCDepositAddress> {
    return new Promise<IOTCDepositAddress>(resolve => {
      axios.post(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }

  public update(entity): Promise<IOTCDepositAddress> {
    return new Promise<IOTCDepositAddress>(resolve => {
      axios.put(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }
}
