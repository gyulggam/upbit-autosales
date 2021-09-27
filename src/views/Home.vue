<template>
    <div class="container mx-auto">

        <CoinList />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';
import CoinList from '@/components/CoinList.vue'

export default defineComponent({
    name: 'Home',
    components: {
        CoinList
    },
    computed: {
        ...mapState([
            'gCoinList'
        ]),
    },
});
</script>
