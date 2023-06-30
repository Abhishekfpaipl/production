<template>
    <ProductionLinks></ProductionLinks>
    <StichingLinks active="Single Needle"></StichingLinks>
    <div class="mt-2">
        <div v-for="(stiching, index) in stichings" :key="index" class="border-bottom p-2">
            <div class="d-flex align-items-center">
                <img :src="`${publicPath}${stiching.img}`" class="rounded-circle"
                style="height:60px;width:60px; object-fit: fill;">
                <div class="ms-3">
                    <b class="m-0">{{ stiching.name }}</b>
                    <p class="m-0">#{{ stiching.style }} | <span>Qty : {{ stiching.qty }}</span> | <span>Rate @ ₹ {{ stiching.rate }}</span></p>
                </div>
            </div>
            
            
        </div>
    </div>
</template>

<script>
import StichingLinks from './StichingLinks.vue';
import ProductionLinks from './ProductionLinks.vue';
export default {
    name: "WasTage",
    data() {
        return {
            publicPath: process.env.BASE_URL
        };
    },
    computed: {
        stichings() {
            return this.$store.getters.getStiching;
        }
    },
    components: { StichingLinks, ProductionLinks }
}
</script>

<style lang="scss" scoped></style>