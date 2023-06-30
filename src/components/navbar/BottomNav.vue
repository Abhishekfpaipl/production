<template>
    <div class="d-flex justify-content-evenly align-items-center bg-light w-100"
        style="position:fixed;bottom: 0;height:65px;box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;">

        <router-link to="/order/new" :class="{ 'text-danger': currentRoute === 'Order-New' }" class="text-decoration-none text-dark">
            <div class="d-flex flex-column align-items-center">
                <p class="m-0">Order</p>
                <i class="bi bi-shop-window"></i>
            </div>
        </router-link>

        <router-link to="/store/inward" :class="{ 'text-danger': currentRoute === 'store-inward' }"
            class="text-decoration-none text-dark">

            <div class="d-flex flex-column align-items-center">
                <p class="m-0">Store</p>
                <i class="bi bi-shop-window"></i>
            </div>
        </router-link>

        <router-link to="/cutting/order" :class="{ 'text-danger': currentRoute === 'Order' }"
            class="text-decoration-none text-dark">
            <div class="d-flex flex-column align-items-center">
                <p class="m-0">Cutting</p>
                <i class="bi bi-scissors"></i>
            </div>
        </router-link>

        <router-link to="/production/order" :class="{ 'text-danger': currentRoute === 'production-order' }"
            class="text-decoration-none text-dark">
            <div class="d-flex flex-column align-items-center">
                <p class="m-0">Production</p>
                <i class="bi bi-scissors"></i>
            </div>
        </router-link>

        <router-link to="/finishing/order" :class="{ 'text-danger': currentRoute === 'finishing-order' }"
            class="text-decoration-none text-dark">
            <div class="d-flex flex-column align-items-center">
                <p class="m-0">Finishing</p>
                <i class="bi bi-scissors"></i>
            </div>
        </router-link>

        <div class="d-flex flex-column align-items-center">
            <p class="m-0">Disptach</p>
            <i class="bi bi-box"></i>
        </div>

    </div>
</template>

<script>
export default {
    name: 'BottomNav',
    computed: {
        currentRoute() {
            return this.$route.name;
        }
    },
}
</script>

<style lang="scss" scoped></style>