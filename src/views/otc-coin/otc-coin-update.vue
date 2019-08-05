<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <form
        name="editForm"
        role="form"
        novalidate
        @submit.prevent="save()"
      >
        <h2 id="jhipsterApp.oTCCoin.home.createOrEditLabel">
          Create or edit a OTCCoin
        </h2>
        <div>
          <!--<jhi-alert-error></jhi-alert-error>-->
          <div
            v-if="oTCCoin.id"
            class="form-group"
          >
            <label for="id">ID</label>
            <input
              id="id"
              v-model="oTCCoin.id"
              type="text"
              class="form-control"
              name="id"
              readonly
            >
          </div>

          <div class="form-group">
            <label
              class="form-control-label"
              for="otc-coin-coin"
            >Coin</label>
            <input
              id="otc-coin-coin"
              v-model="$v.oTCCoin.coin.$model"
              type="text"
              class="form-control"
              name="coin"
              :class="{'valid': !$v.oTCCoin.coin.$invalid, 'invalid': $v.oTCCoin.coin.$invalid}"
              required
            >
            <div v-if="$v.oTCCoin.coin.$anyDirty && $v.oTCCoin.coin.$invalid">
              <small
                v-if="!$v.oTCCoin.coin.required"
                class="form-text text-danger"
              >
                This field is required.
              </small>
              <!---->
            </div>
          </div>
          <div class="form-group">
            <label
              class="form-control-label"
              for="otc-coin-coinType"
            >Coin Type</label>
            <select
              id="otc-coin-coinType"
              v-model="$v.oTCCoin.coinType.$model"
              class="form-control"
              name="coinType"
              :class="{'valid': !$v.oTCCoin.coinType.$invalid, 'invalid': $v.oTCCoin.coinType.$invalid}"
              required
            >
              <option value="COMMON">
                COMMON
              </option>
              <option value="ANCHOR">
                ANCHOR
              </option>
            </select>
            <div v-if="$v.oTCCoin.coinType.$anyDirty && $v.oTCCoin.coinType.$invalid">
              <small
                v-if="!$v.oTCCoin.coinType.required"
                class="form-text text-danger"
              >
                This field is required.
              </small>
              <!---->
            </div>
          </div>
          <div class="form-group">
            <label
              class="form-control-label"
              for="otc-coin-bcPlatform"
            >Bc Platform</label>
            <select
              id="otc-coin-bcPlatform"
              v-model="$v.oTCCoin.bcPlatform.$model"
              class="form-control"
              name="bcPlatform"
              :class="{'valid': !$v.oTCCoin.bcPlatform.$invalid, 'invalid': $v.oTCCoin.bcPlatform.$invalid}"
            >
              <option value="ETHEREUM">
                ETHEREUM
              </option>
              <option value="BITCOIN">
                BITCOIN
              </option>
            </select>
          </div>
          <div class="form-group">
            <label
              class="form-control-label"
              for="otc-coin-address"
            >Address</label>
            <input
              id="otc-coin-address"
              v-model="$v.oTCCoin.address.$model"
              type="text"
              class="form-control"
              name="address"
              :class="{'valid': !$v.oTCCoin.address.$invalid, 'invalid': $v.oTCCoin.address.$invalid}"
            >
          </div>
          <div class="form-group">
            <label
              class="form-control-label"
              for="otc-coin-status"
            >Status</label>
            <select
              id="otc-coin-status"
              v-model="$v.oTCCoin.status.$model"
              class="form-control"
              name="status"
              :class="{'valid': !$v.oTCCoin.status.$invalid, 'invalid': $v.oTCCoin.status.$invalid}"
              required
            >
              <option value="ENABLED">
                ENABLED
              </option>
              <option value="DISABLED">
                DISABLED
              </option>
              <option value="EXPIRED">
                EXPIRED
              </option>
            </select>
            <div v-if="$v.oTCCoin.status.$anyDirty && $v.oTCCoin.status.$invalid">
              <small
                v-if="!$v.oTCCoin.status.required"
                class="form-text text-danger"
              >
                This field is required.
              </small>
              <!---->
            </div>
          </div>
          <div class="form-group">
            <label
              class="form-control-label"
              for="otc-coin-minChargeAmount"
            >Min Charge Amount</label>
            <input
              id="otc-coin-minChargeAmount"
              v-model="$v.oTCCoin.minChargeAmount.$model"
              type="number"
              class="form-control"
              name="minChargeAmount"
              :class="{'valid': !$v.oTCCoin.minChargeAmount.$invalid, 'invalid': $v.oTCCoin.minChargeAmount.$invalid}"
            >
          </div>
          <div class="form-group">
            <label
              class="form-control-label"
              for="otc-coin-minCashAmount"
            >Min Cash Amount</label>
            <input
              id="otc-coin-minCashAmount"
              v-model="$v.oTCCoin.minCashAmount.$model"
              type="number"
              class="form-control"
              name="minCashAmount"
              :class="{'valid': !$v.oTCCoin.minCashAmount.$invalid, 'invalid': $v.oTCCoin.minCashAmount.$invalid}"
            >
          </div>
          <div class="form-group">
            <label
              class="form-control-label"
              for="otc-coin-minFee"
            >Min Fee</label>
            <input
              id="otc-coin-minFee"
              v-model="$v.oTCCoin.minFee.$model"
              type="number"
              class="form-control"
              name="minFee"
              :class="{'valid': !$v.oTCCoin.minFee.$invalid, 'invalid': $v.oTCCoin.minFee.$invalid}"
            >
          </div>
          <div class="form-group">
            <label
              class="form-control-label"
              for="otc-coin-maxFee"
            >Max Fee</label>
            <input
              id="otc-coin-maxFee"
              v-model="$v.oTCCoin.maxFee.$model"
              type="number"
              class="form-control"
              name="maxFee"
              :class="{'valid': !$v.oTCCoin.maxFee.$invalid, 'invalid': $v.oTCCoin.maxFee.$invalid}"
            >
          </div>
          <div class="form-group">
            <label
              class="form-control-label"
              for="otc-coin-sortSequence"
            >Sort Sequence</label>
            <input
              id="otc-coin-sortSequence"
              v-model="$v.oTCCoin.sortSequence.$model"
              type="number"
              class="form-control"
              name="sortSequence"
              :class="{'valid': !$v.oTCCoin.sortSequence.$invalid, 'invalid': $v.oTCCoin.sortSequence.$invalid}"
            >
          </div>
        </div>
        <div>
          <button
            id="cancel-save"
            type="button"
            class="btn btn-secondary"
            @click="previousState()"
          >
            <font-awesome-icon icon="ban" />&nbsp;<span>Cancel</span>
          </button>
          <button
            id="save-entity"
            type="submit"
            :disabled="$v.oTCCoin.$invalid || isSaving"
            class="btn btn-primary"
          >
            <font-awesome-icon icon="save" />&nbsp;<span>Save</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts" src="./otc-coin-update.component.ts">
</script>
