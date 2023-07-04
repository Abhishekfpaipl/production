<template>
    <ManagerLinks></ManagerLinks>
    <ProcessingLinks></ProcessingLinks>
    <div class=" ">
        <div v-for="(job, index) in jobs" :key="index"
            class="d-flex justify-content-between align-items-center border-bottom p-2">
            <div class="d-flex align-items-center">
                <img :src="`${publicPath}${job.img}`" class="rounded-circle"
                    style="height:60px;width:60px; object-fit: fill;">
                <div class="ms-3">
                    <p class="m-0 fw-bold">#{{ job.style }} | <span>Qty : {{ job.qty }}</span></p>
                    <p class="m-0" style="font-size: 13px;">Exp. Date : {{ job.date }}</p>
                </div>
            </div>
            <div class="text-success rounded">
                <button type="button" style="font-size: 14px;" class="btn" :class="job.btn">
                    Collect
                </button>
            </div>

        </div>
    </div>
</template>

<script>
import ManagerLinks from './ManagerLinks.vue';
import ProcessingLinks from './ProcessingLinks.vue';
export default {
    name: "ProductionPage",
    data() {
        return {
            publicPath: process.env.BASE_URL
        };
    },
    computed: {
        jobs() {
            return this.$store.getters.getManager;
        }
    },
    components: { ProcessingLinks, ManagerLinks }
}
</script>

<style lang="scss" scoped></style>