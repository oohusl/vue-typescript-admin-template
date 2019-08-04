<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <form name="editForm" role="form" novalidate v-on:submit.prevent="save()" >
                <h2 id="jhipsterApp.oTCCoin.home.createOrEditLabel" >Create or edit a OTCCoin</h2>
                <div>
                    <!--<jhi-alert-error></jhi-alert-error>-->
                    <div class="form-group" v-if="oTCCoin.id">
                        <label for="id" >ID</label>
                        <input type="text" class="form-control" id="id" name="id"
                               v-model="oTCCoin.id" readonly />
                    </div>

                    <div class="form-group">
                        <label class="form-control-label"  for="otc-coin-coin">Coin</label>
                        <input type="text" class="form-control" name="coin" id="otc-coin-coin"
                            :class="{'valid': !$v.oTCCoin.coin.$invalid, 'invalid': $v.oTCCoin.coin.$invalid }" v-model="$v.oTCCoin.coin.$model"  required/>
                        <div v-if="$v.oTCCoin.coin.$anyDirty && $v.oTCCoin.coin.$invalid">
                                <small class="form-text text-danger" v-if="!$v.oTCCoin.coin.required" >
                                    This field is required.
                                </small>
                            <!---->
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label"  for="otc-coin-coinType">Coin Type</label>
                        <select class="form-control" name="coinType" :class="{'valid': !$v.oTCCoin.coinType.$invalid, 'invalid': $v.oTCCoin.coinType.$invalid }" v-model="$v.oTCCoin.coinType.$model" id="otc-coin-coinType"  required>
                            <option value="COMMON" >COMMON</option>
                            <option value="ANCHOR" >ANCHOR</option>
                        </select>
                        <div v-if="$v.oTCCoin.coinType.$anyDirty && $v.oTCCoin.coinType.$invalid">
                                <small class="form-text text-danger" v-if="!$v.oTCCoin.coinType.required" >
                                    This field is required.
                                </small>
                            <!---->
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label"  for="otc-coin-bcPlatform">Bc Platform</label>
                        <select class="form-control" name="bcPlatform" :class="{'valid': !$v.oTCCoin.bcPlatform.$invalid, 'invalid': $v.oTCCoin.bcPlatform.$invalid }" v-model="$v.oTCCoin.bcPlatform.$model" id="otc-coin-bcPlatform" >
                            <option value="ETHEREUM" >ETHEREUM</option>
                            <option value="BITCOIN" >BITCOIN</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label"  for="otc-coin-address">Address</label>
                        <input type="text" class="form-control" name="address" id="otc-coin-address"
                            :class="{'valid': !$v.oTCCoin.address.$invalid, 'invalid': $v.oTCCoin.address.$invalid }" v-model="$v.oTCCoin.address.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label"  for="otc-coin-status">Status</label>
                        <select class="form-control" name="status" :class="{'valid': !$v.oTCCoin.status.$invalid, 'invalid': $v.oTCCoin.status.$invalid }" v-model="$v.oTCCoin.status.$model" id="otc-coin-status"  required>
                            <option value="ENABLED" >ENABLED</option>
                            <option value="DISABLED" >DISABLED</option>
                            <option value="EXPIRED" >EXPIRED</option>
                        </select>
                        <div v-if="$v.oTCCoin.status.$anyDirty && $v.oTCCoin.status.$invalid">
                                <small class="form-text text-danger" v-if="!$v.oTCCoin.status.required" >
                                    This field is required.
                                </small>
                            <!---->
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label"  for="otc-coin-minChargeAmount">Min Charge Amount</label>
                        <input type="number" class="form-control" name="minChargeAmount" id="otc-coin-minChargeAmount"
                            :class="{'valid': !$v.oTCCoin.minChargeAmount.$invalid, 'invalid': $v.oTCCoin.minChargeAmount.$invalid }" v-model="$v.oTCCoin.minChargeAmount.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label"  for="otc-coin-minCashAmount">Min Cash Amount</label>
                        <input type="number" class="form-control" name="minCashAmount" id="otc-coin-minCashAmount"
                            :class="{'valid': !$v.oTCCoin.minCashAmount.$invalid, 'invalid': $v.oTCCoin.minCashAmount.$invalid }" v-model="$v.oTCCoin.minCashAmount.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label"  for="otc-coin-minFee">Min Fee</label>
                        <input type="number" class="form-control" name="minFee" id="otc-coin-minFee"
                            :class="{'valid': !$v.oTCCoin.minFee.$invalid, 'invalid': $v.oTCCoin.minFee.$invalid }" v-model="$v.oTCCoin.minFee.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label"  for="otc-coin-maxFee">Max Fee</label>
                        <input type="number" class="form-control" name="maxFee" id="otc-coin-maxFee"
                            :class="{'valid': !$v.oTCCoin.maxFee.$invalid, 'invalid': $v.oTCCoin.maxFee.$invalid }" v-model="$v.oTCCoin.maxFee.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label"  for="otc-coin-sortSequence">Sort Sequence</label>
                        <input type="number" class="form-control" name="sortSequence" id="otc-coin-sortSequence"
                            :class="{'valid': !$v.oTCCoin.sortSequence.$invalid, 'invalid': $v.oTCCoin.sortSequence.$invalid }" v-model="$v.oTCCoin.sortSequence.$model" />
                    </div>


                </div>
                <div>
                    <button type="button" id="cancel-save" class="btn btn-secondary" v-on:click="previousState()">
                        <font-awesome-icon icon="ban"></font-awesome-icon>&nbsp;<span >Cancel</span>
                    </button>
                    <button type="submit" id="save-entity" :disabled="$v.oTCCoin.$invalid || isSaving" class="btn btn-primary">
                        <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span >Save</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script lang="ts" src="./otc-coin-update.component.ts">
</script>
