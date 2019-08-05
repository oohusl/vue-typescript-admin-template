import { Component, Vue, Inject } from 'vue-property-decorator'

import { numeric, required, minLength, maxLength } from 'vuelidate/lib/validators'

import AlertService from '@/shared/alert/alert.service'
import { IOTCCoin, OTCCoin } from '@/shared/model/otc-coin.model'
import OTCCoinService from './otc-coin.service'

const validations: any = {
  oTCCoin: {
    coin: {
      required
    },
    coinType: {
      required
    },
    bcPlatform: {},
    address: {},
    status: {
      required
    },
    minChargeAmount: {},
    minCashAmount: {},
    minFee: {},
    maxFee: {},
    sortSequence: {}
  }
}

@Component({
  validations
})
export default class OTCCoinUpdate extends Vue {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('oTCCoinService') private oTCCoinService: () => OTCCoinService;
  public oTCCoin: IOTCCoin = new OTCCoin();
  public isSaving = false;

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.oTCCoinId) {
        vm.retrieveOTCCoin(to.params.oTCCoinId)
      }
    })
  }

  public save(): void {
    this.isSaving = true
    if (this.oTCCoin.id) {
      this.oTCCoinService()
        .update(this.oTCCoin)
        .then(param => {
          this.isSaving = false
          this.$router.go(-1)
          const message = 'A OTCCoin is updated with identifier ' + param.id
          this.alertService().showAlert(message, 'info')
        })
    } else {
      this.oTCCoinService()
        .create(this.oTCCoin)
        .then(param => {
          this.isSaving = false
          this.$router.go(-1)
          const message = 'A OTCCoin is created with identifier ' + param.id
          this.alertService().showAlert(message, 'success')
        })
    }
  }

  public retrieveOTCCoin(oTCCoinId): void {
    this.oTCCoinService()
      .find(oTCCoinId)
      .then(res => {
        this.oTCCoin = res
      })
  }

  public previousState(): void {
    this.$router.go(-1)
  }

  public initRelationships(): void {}
}
