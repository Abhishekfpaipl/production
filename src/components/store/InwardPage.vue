<template>
    <StoreLinks active="Inward"></StoreLinks>
    <div class="mt-2">
        <div v-for="(inward, index) in inwards" :key="index"
            class="d-flex justify-content-between align-items-center border-bottom p-2">
            <div class="d-flex align-items-center">
                <img :src="`${publicPath}${inward.img}`" class="rounded-circle"
                    style="height:60px;width:60px; object-fit: fill;">
                <div class="ms-3">
                    <p class="m-0">{{ inward.name }}</p>
                    <p class="m-0">{{ inward.stock }} mtr <span>@ Rs.{{ inward.price }}</span> </p>
                </div>
            </div>

            <div class="text-success rounded">
                <button class="btn btn-outline-success py-1 me-3">
                    {{ inward.status }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import StoreLinks from './StoreLinks.vue';
export default {
    name: "InwardPage",
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