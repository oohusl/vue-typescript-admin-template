import Vue from 'vue'

import 'normalize.css'
import ElementUI from 'element-ui'
import SvgIcon from 'vue-svgicon'

import '@/styles/element-variables.scss'
import '@/styles/index.scss'

import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
import '@/icons/components'
import '@/permission'

import OTCCoinService from '@/views/otc-coin/otc-coin.service'
import OTCDepositAddressService from '@/views/otc-deposit/otc-deposit-address.service'
import UserPaymentMethodService from '@/views/user-payment-method/user-payment-method.service'

const oTCCoinService = new OTCCoinService()

Vue.use(ElementUI)
Vue.use(SvgIcon, {
  tagName: 'svg-icon',
  defaultWidth: '1em',
  defaultHeight: '1em'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  provide: {
    oTCCoinService: () => {
      return oTCCoinService
    },
    oTCDepositAddressService: () => {
      return new OTCDepositAddressService()
    },
    UserPaymentMethodService: () => {
      return new UserPaymentMethodService()
    }
  },
  render: h => h(App)
}).$mount('#app')
