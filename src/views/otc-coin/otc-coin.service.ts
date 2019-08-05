import axios from 'axios'

import { IOTCCoin } from './otc-coin.model'

const baseApiUrl = '/uaa/api/otc-coins'

export default class OTCCoinService {
  public find(id:number): Promise<IOTCCoin> {
    return new Promise<IOTCCoin>(resolve => {
      axios.get(`${baseApiUrl}/${id}`).then(function(res) {
        resolve(res.data)
      })
    })
  }

  public retrieve(paginationQuery?: any): Promise<any> {
    return new Promise<any>(resolve => {
      axios.get(baseApiUrl).then(function(res) {
        resolve(res)
      })
    })
  }

  public delete(id:number): Promise<any> {
    return new Promise<any>(resolve => {
      axios.delete(`${baseApiUrl}/${id}`).then(function(res) {
        resolve(res)
      })
    })
  }

  public create(entity:IOTCCoin): Promise<IOTCCoin> {
    return new Promise<IOTCCoin>(resolve => {
      axios.post(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data)
      })
    })
  }

  public update(entity:IOTCCoin): Promise<IOTCCoin> {
    return new Promise<IOTCCoin>(resolve => {
      axios.put(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data)
      })
    })
  }
}
