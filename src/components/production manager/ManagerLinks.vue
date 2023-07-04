<template>
    <TopNav> Production Manager</TopNav>
    <div class="nav nav-tabs py-2 d-flex overflow-x-scroll flex-nowrap ws-nowarp align-items-center"
        style="font-size: 10px; height: 63px; font-weight: 500;" id="nav-tab" role="tablist">

        <RouterLink class="nav-link ws-nowarp" :to="{ name: 'Production-Manager-Order' }"
            :class="currentRouteName('Production-Manager-Order') ? 'active' : ''">Order
        </RouterLink>
        <router-link class="nav-link ws-nowarp" :to="{ name: 'Production-Manager-Allotment' }"
            :class="currentRouteName('Production-Manager-Allotment') ? 'active' : ''">Alloment</router-link>

        <router-link class="nav-link ws-nowarp " :to="{ name: 'Production-Manager-Processing-Production' }"
            :class="currentRouteName('Production-Manager-Processing') ? 'active' : ''">Processing </router-link>

        <router-link class="nav-link ws-nowarp " :to="{ name: 'Production-Manager-Collection-Production' }"
            :class="currentRouteName('Production-Manager-Collection') ? 'active' : ''">Collection </router-link>

        <router-link class="nav-link ws-nowarp " :to="{ name: 'Production-Manager-Completed' }"
            :class="currentRouteName('Production-Manager-Completed') ? 'active' : ''">Completed </router-link>

    </div>
</template>

<script>
import TopNav from '../navbar/TopNav.vue';

export default {
    name: "ManagerLinks",
    components: { TopNav, },
    data() {
        return {
            // links:[
            //     {route:''}
            // ]
        };
    },
    props: ["active"],
    computed: {
        // currentRouteName() {
        //     return this.$route.name;
        // }
    },
    methods: {
        currentRouteName(routeName) {
            return this.$route.name.includes(routeName);
        }
    },

}
</script>
<style>
.nav-link {
    color: grey
}

.ws-nowarp {
    white-space: nowrap;
}
</style>