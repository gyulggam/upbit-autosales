<template>
    <div class="coininfobox-wrap grid py-4 text-primary">
        <div class="upanddown">
            <i class="fas fa-arrow-up text-arrowup"></i>
            <i class="fas fa-arrow-down text-arrowdown"></i>
        </div>

        <div class="coin-name">
            <p>{{ cKrCoinName }}</p>
            <p class="text-secondary">{{ cEnCoinName }}</p>
        </div>

        <div class="coin-price">
            30,000
        </div>

        <div class="coin-rate">
            45%
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "CoinInfoBox",
    props: {
        pCoinInfo: {
            type: Object,
            default: null
        }
    },
    computed: {
        cKrCoinName() {
            return this.pCoinInfo && this.pCoinInfo.korean_name;
        },
        cEnCoinName() {
            return this.pCoinInfo && this.pCoinInfo.english_name;
        },

    },
    data() {
        return {
        }
    }
})
</script>

<style lang="scss">
    .coininfobox-wrap {
        grid-template-columns: 10% 40% 30% 20%;
    }
</style>