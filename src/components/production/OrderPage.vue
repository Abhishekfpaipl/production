<template>
    <ProductionLinks active="Order"></ProductionLinks>
    <div class="mt-2">
        <div v-for="(order, index) in orders" :key="index"
            class="d-flex justify-content-between align-items-center border-bottom p-2">
            <div class="d-flex align-items-center">
                <img :src="`${publicPath}${order.img}`" class="rounded-circle"
                    style="height:60px;width:60px; object-fit: fill;">
                <div class="ms-3">
                    <p class="m-0">#{{ order.style }} | <span>Qty : {{ order.qty }}</span></p>
                    <p class="m-0">Costing : {{ order.costing }}</p>
                </div>
            </div>
            <div class="text-success rounded">
                <button class="btn btn-outline-success py-1 me-3">
                    {{ order.status }}
                </button>
            </div>


        </div>
    </div>
    
</template>

<script>
import ProductionLinks from './ProductionLinks.vue';
 

export default {
    name: "InwardPage",
    components: { ProductionLinks },
    data() {
        return {
            publicPath: process.env.BASE_URL
        };
    },
    computed: {
        orders() {
            return this.$store.getters.getProductionOrder;
        }
    },
   
}
</script>

<style lang="scss" scoped></style>