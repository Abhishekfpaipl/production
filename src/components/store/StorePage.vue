<template>
    <StoreLinks active="Store"></StoreLinks>
    <div class="mt-2">
        <div v-for="(inward, index) in inwards" :key="index" class="border-bottom p-2">
            <div class="d-flex align-items-center">
                <img :src="`${publicPath}${inward.img}`" class="rounded-circle"
                    style="height:60px;width:60px; object-fit: fill;">
                <div class="ms-3">
                    <p class="m-0">{{ inward.name }}</p>
                    <p class="m-0">{{ inward.stock }} mtr <span>@ Rs.{{ inward.price }}</span> </p>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
import StoreLinks from './StoreLinks.vue';
export default {
    name: "StorePage",
    data() {
        return {
            publicPath: process.env.BASE_URL
        };
    },
    computed: {
        inwards() {
            return this.$store.getters.getInward;
        }
    },
    components: { StoreLinks }
}
</script>

<style lang="scss" scoped></style>