import { Component, Vue, Inject } from 'vue-property-decorator';

import { IOTCCoin } from '@/shared/model/otc-coin.model';
import OTCCoinService from './otc-coin.service';

@Component
export default class OTCCoinDetails extends Vue {
  @Inject('oTCCoinService') private oTCCoinService: () => OTCCoinService;
  public oTCCoin: IOTCCoin = {};

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.oTCCoinId) {
        vm.retrieveOTCCoin(to.params.oTCCoinId);
      }
    });
  }

  public retrieveOTCCoin(oTCCoinId) {
    this.oTCCoinService()
      .find(oTCCoinId)
      .then(res => {
        this.oTCCoin = res;
      });
  }

  public previousState() {
    this.$router.go(-1);
  }
}
