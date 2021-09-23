<template>
    <div>
        {{ sTest }}
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "App",
    data() {
        return {
            sTest: "test"
        }
    },
})
</script>

<style lang="scss">

</style>
