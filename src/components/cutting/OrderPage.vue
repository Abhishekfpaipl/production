<template>
    <CuttingLinks active="Order"></CuttingLinks>
    <div class="mt-2">
        <div v-for="(cutting, index) in cuttings" :key="index" class="d-flex justify-content-between align-items-center border-bottom p-2">
            <div class="d-flex align-items-center">
                <img :src="`${publicPath}${cutting.img}`" class="rounded-circle"
                    style="height:60px;width:60px; object-fit: fill;">
                <div class="ms-3">
                    <p class="m-0">{{ cutting.name }}</p>
                    <p class="m-0">{{ cutting.stock }} mtr</p>
                </div>
            </div>
            <div v-if="cutting.status === 'Accept'" class="text-success rounded">
                <button  class="btn btn-outline-success">
                {{ cutting.status }}
                </button> 
            </div>
            <div v-if="cutting.status === 'Running'" class="text-info rounded">
                <button  class="btn btn-outline-info">
                {{ cutting.status }}
                </button> 
            </div>

            <div v-if="cutting.status === 'Hold'" class="text-danger rounded">
                <button  class="btn btn-outline-danger">
                {{ cutting.status }}
                </button> 
            </div>
            
            <div v-if="cutting.status === 'Finished'" class="text-success rounded">
                <button  class="btn btn-outline-success">
                {{ cutting.status }}
                </button> 
            </div>


        </div>
    </div>
</template>

<script>
import CuttingLinks from './CuttingLinks.vue';
export default {
    name: "OrderPage",
    data() {
        return {
            publicPath: process.env.BASE_URL
        };
    },
    computed: {
        cuttings() {
            return this.$store.getters.getCutting;
        }
    },
    components: { CuttingLinks }
}
</script>

<style lang="scss" scoped></style>