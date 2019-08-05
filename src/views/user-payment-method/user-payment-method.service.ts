import axios from 'axios';

import { IUserPaymentMethod } from './user-payment-method.model';

const baseApiUrl = 'uaa/api/user-payment-methods';

export default class UserPaymentMethodService {
  public find(id): Promise<IUserPaymentMethod> {
    return new Promise<IUserPaymentMethod>(resolve => {
      axios.get(`${baseApiUrl}/${id}`).then(function(res) {
        resolve(res.data);
      });
    });
  }

  public retrieve(paginationQuery?: any): Promise<IUserPaymentMethod[]> {
    return new Promise<IUserPaymentMethod[]>(resolve => {
      axios.get(baseApiUrl).then(function(res) {
        resolve(res.data);
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

  public create(entity): Promise<IUserPaymentMethod> {
    return new Promise<IUserPaymentMethod>(resolve => {
      axios.post(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }

  public update(entity): Promise<IUserPaymentMethod> {
    return new Promise<IUserPaymentMethod>(resolve => {
      axios.put(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }
}
