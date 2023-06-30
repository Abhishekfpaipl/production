<template>
    <ProductionLinks></ProductionLinks>
    <MaterialLinks></MaterialLinks>
    <div class="mt-2">
        <div v-for="(material, index) in materials" :key="index" class="border-bottom p-2">
            <div class="d-flex align-items-center">
                <img :src="`${publicPath}${material.img}`" class="rounded-circle"
                style="height:60px;width:60px; object-fit: fill;">
                <div class="ms-3">
                    <b class="m-0">{{ material.name }}</b>
                    <p class="m-0">#{{ material.style }} | <span>Qty : {{ material.qty }}</span> | <span>Rate @ ₹ {{
                        material.rate
                    }}</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductionLinks from './ProductionLinks.vue';
import MaterialLinks from './MaterialLinks.vue';
export default {
    name: "MaterialOne",
    data() {
        return {
            publicPath: process.env.BASE_URL
        };
    },
    computed: {
        materials() {
            return this.$store.getters.getMaterial;
        }
    },
    components: { MaterialLinks, ProductionLinks }
}
</script>

<style lang="scss" scoped></style>