<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <div v-if="oTCCoin">
                <h2><span >OTCCoin</span> {{oTCCoin.id}}</h2>
                <!--<jhi-alert-error></jhi-alert-error>-->
                <dl class="row jh-entity-details">

                        <dt><span >Coin</span></dt>
                        <dd>
                                <span>{{oTCCoin.coin}}</span>
                        </dd>
                        <dt><span >Coin Type</span></dt>
                        <dd>
                                <span >{{oTCCoin.coinType}}</span>
                        </dd>
                        <dt><span >Bc Platform</span></dt>
                        <dd>
                                <span >{{oTCCoin.bcPlatform}}</span>
                        </dd>
                        <dt><span >Address</span></dt>
                        <dd>
                                <span>{{oTCCoin.address}}</span>
                        </dd>
                        <dt><span >Status</span></dt>
                        <dd>
                                <span >{{oTCCoin.status}}</span>
                        </dd>
                        <dt><span >Min Charge Amount</span></dt>
                        <dd>
                                <span>{{oTCCoin.minChargeAmount}}</span>
                        </dd>
                        <dt><span >Min Cash Amount</span></dt>
                        <dd>
                                <span>{{oTCCoin.minCashAmount}}</span>
                        </dd>
                        <dt><span >Min Fee</span></dt>
                        <dd>
                                <span>{{oTCCoin.minFee}}</span>
                        </dd>
                        <dt><span >Max Fee</span></dt>
                        <dd>
                                <span>{{oTCCoin.maxFee}}</span>
                        </dd>
                        <dt><span >Sort Sequence</span></dt>
                        <dd>
                                <span>{{oTCCoin.sortSequence}}</span>
                        </dd>

                </dl>
                <button type="submit"
                        v-on:click.prevent="previousState()"
                        class="btn btn-info">
                    <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span > Back</span>
                </button>

                <router-link :to="{name: 'OTCCoinEdit', params: {oTCCoinId: oTCCoin.id}}" tag="button" class="btn btn-primary">
                    <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span > Edit</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./otc-coin-details.component.ts">
</script>

