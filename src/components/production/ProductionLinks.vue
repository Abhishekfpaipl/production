<template>
    <TopNav> Production</TopNav>
    <div class="nav nav-tabs py-2 d-flex overflow-x-scroll flex-nowrap ws-nowarp align-items-center"
        style="font-size: 10px; height: 63px; font-weight: 500;" id="nav-tab" role="tablist">

        <RouterLink class="nav-link ws-nowarp" :to="{ name: 'Production-Order' }"
            :class="currentRouteName('Production-Order') ? 'active' : ''">Order
        </RouterLink>
        <router-link class="nav-link ws-nowarp" :to="{ name: 'Production-Processing' }"
            :class="currentRouteName('Production-Processing') ? 'active' : ''">Processing</router-link>

        <router-link class="nav-link ws-nowarp " :to="{ name: 'Production-Job-Threading' }"
            :class="currentRouteName('Production-Job') ? 'active' : ''">Completed </router-link>

        <!-- <router-link class="nav-link ws-nowarp " :to="{ name: 'Production-Material-One' }"
            :class="currentRouteName('Production-Material') ? 'active' : ''">Due</router-link>
         

        <router-link class="nav-link ws-nowarp " :to="{ name: 'Production-Finishing' }"
            :class="currentRouteName('Production-Finishing') ? 'active' : ''">Finish</router-link>
          -->

    </div>
</template>

<script>
import TopNav from '../navbar/TopNav.vue';
export default {
    name: "ProductionLinks",
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
    components: { TopNav }
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