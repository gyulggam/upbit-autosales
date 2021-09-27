<template>
    <div>
        <router-view />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions } from 'vuex'

export default defineComponent({
    name: "App",
    data() {
        return {
        }
    },
    methods: {
        ...mapActions([
            'getCoinList'
        ]),
    },
    created() {
        this.getCoinList();
        this.$router.push('home');
    },
})
</script>