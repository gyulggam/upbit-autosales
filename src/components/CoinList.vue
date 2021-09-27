<template>
    <div class="coinlist-wrap">
        <div
            v-for="(aItem, aIdx) in gCoinList"
            :key="aItem.market + aIdx"
            class="coinlist"
        >
            <CoinInfoBox
                :pCoinInfo="aItem"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'vuex';
import CoinInfoBox from '@/components/CoinInfoBox.vue'

export default defineComponent({
    name: "CoinList",
    components: {
        CoinInfoBox,
    },
    data() {
        return {
            sCoinList: null,
        }
    },
    computed: {
        ...mapState([
            'gCoinList'
        ]),
    },
})
</script>


<style>

</style>