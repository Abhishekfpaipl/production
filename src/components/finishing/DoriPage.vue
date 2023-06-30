<template>
    <FinishingLinks></FinishingLinks>
    <ThreadLinks></ThreadLinks>
    <div class="mt-2">
        <div v-for="(thread, index) in threading" :key="index" class="border-bottom p-2">
            <div class="d-flex align-items-center">
                <img :src="`${publicPath}${thread.img}`" class="rounded-circle"
                    style="height:60px;width:60px; object-fit: fill;">
                <div class="ms-3">
                    <b class="m-0">{{ thread.name }}</b>
                    <p class="m-0">#{{ thread.style }} | <span>Qty : {{ thread.qty }}</span> | <span>Rate @ ₹ {{ thread.rate
                    }}</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FinishingLinks from './FinishingLinks.vue'
import ThreadLinks from './ThreadLinks.vue'
export default {
    name: 'DoriPage',
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    },
    computed: {
        threading() {
            return this.$store.getters.getThreading
        }
    },
    components: {
        ThreadLinks,
        FinishingLinks,
    }
}
</script>

<style lang="scss" scoped></style>