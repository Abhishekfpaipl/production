<template>
    <ProductionLinks></ProductionLinks>
    <JobLinks></JobLinks>
    <div class="mt-2">
        <div v-for="(job, index) in jobs" :key="index" class="border-bottom p-2">
            <div class="d-flex align-items-center">
                <img :src="`${publicPath}${job.img}`" class="rounded-circle"
                style="height:60px;width:60px; object-fit: fill;">
                <div class="ms-3">
                    <b class="m-0">{{ job.name }}</b>
                    <p class="m-0">#{{ job.style }} | <span>Qty : {{ job.qty }}</span> | <span>Rate @ ₹ {{ job.rate
                    }}</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductionLinks from './ProductionLinks.vue';
import JobLinks from './JobLinks.vue';
export default {
    name: "ThreadingPage",
    data() {
        return {
            publicPath: process.env.BASE_URL
        };
    },
    computed: {
        jobs() {
            return this.$store.getters.getJob;
        }
    },
    components: { JobLinks, ProductionLinks }
}
</script>

<style lang="scss" scoped></style>