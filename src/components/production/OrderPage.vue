<template>
    <!-- <ProductionLinks active="Order"></ProductionLinks> -->
    <TopNav>Production</TopNav>
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
                <div v-if="accepted[index]">
                    <BtnChange :order="order"></BtnChange>
                </div>
                <div class="" v-else>
                    <button @click="acceptOrder(index)" class="btn btn-success">Accept</button>
                </div>
            </div>
        </div>
    </div>
    <ProductionBottomnav></ProductionBottomnav>
</template>

<script>
import TopNav from '../navbar/TopNav.vue';
// import ProductionLinks from './ProductionLinks.vue';
import ProductionBottomnav from '../navbar/ProductionBottomnav.vue';
import BtnChange from '@/components/production/btn/BtnChange.vue';

export default {
    name: "InwardPage",
    components: { ProductionBottomnav, TopNav, BtnChange },
    data() {
        return {
            publicPath: process.env.BASE_URL,
            accepted: []
        };
    },
    computed: {
        orders() {
            return this.$store.getters.getProductionOrder;
        }
    },
    methods: {
        acceptOrder(index) {
            this.accepted[index] = true;
        }
    }

}
</script>
 