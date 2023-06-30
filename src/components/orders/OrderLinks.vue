<template>
    <div class="nav nav-tabs align-items-center py-2 d-flex justify-content-around px-2"
        style="font-size: 10px; height: 63px; font-weight: 500;box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;"
        id="nav-tab" role="tablist">
        <router-link class="nav-link" :to="{ name: 'Order-New' }"
            :class="currentRouteName === 'Order-New' ? 'active' : ''">New</router-link>

        <router-link class="nav-link " :to="{ name: 'Order-Ready' }"
            :class="currentRouteName === 'Order-Ready' ? 'active' : ''">Ready</router-link>

        <router-link class="nav-link " :to="{ name: 'Order-Order' }"
            :class="currentRouteName === 'Order-Order' ? 'active' : ''">Order</router-link>

        <router-link class="nav-link " :to="{ name: 'Order-Shipped' }"
            :class="currentRouteName === 'Order-Shipped' ? 'active' : ''">Shipped</router-link>

        <router-link class="nav-link " :to="{ name: 'Order-Delivered' }"
            :class="currentRouteName === 'Order-Delivered' ? 'active' : ''">Delivered</router-link>

    </div>
</template>                                                 

<script>
export default {
    name: 'OrderLinks',
    props: ['active'],
    computed: {
        currentRouteName() {
            return this.$route.name;
        }
    }
}
</script>
<style>
.nav-link {
    color: grey
}
</style>