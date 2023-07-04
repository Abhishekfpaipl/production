<template>

    <TopNav>Cutting</TopNav>
    <div class="nav nav-tabs align-items-center py-2 d-flex justify-content-around px-2"
        style="font-size: 10px; height: 63px; font-weight: 500;box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;"
        id="nav-tab" role="tablist">
        <router-link class="nav-link" to="order" :class="active === 'Order' ? 'active' : ''">Order
        </router-link>
        <router-link class="nav-link " to="cutting" :class="active === 'Cutting' ? 'active' : ''" >Cutting</router-link>
        <router-link class="nav-link " to="production" :class="active === 'Production' ? 'active' : ''" >Completed</router-link>

    </div>
</template>

<script>
import TopNav from '../navbar/TopNav.vue';
export default {
    name: "CuttingLinks",
    props: ["active"],
    components: { TopNav }
}
</script>
<style>
.nav-link {
    color: grey
}
</style>