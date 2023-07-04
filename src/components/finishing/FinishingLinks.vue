<template>
    <TopNav>Finishing</TopNav>

    <div class="nav nav-tabs py-2 d-flex overflow-x-scroll flex-nowrap ws-nowarp align-items-center"
        style="font-size: 10px; height: 63px; font-weight: 500;" id="nav-tab" role="tablist">
        <router-link class="nav-link ws-nowarp" :to="{ name: 'Finishing-Order' }"
            :class="currentRouteName('Finishing-Order') ? 'active' : ''">Order
        </router-link>

        <router-link class="nav-link ws-nowarp" :to="{ name: 'Finishing-Processing' }"
            :class="currentRouteName('Finishing-Processing') ? 'active' : ''">Processing</router-link>

        <router-link class="nav-link ws-nowarp " to=""
            :class="currentRouteName('Finishing-Job') ? 'active' : ''">Completed</router-link>
    </div>
    <FinishingBottomNav></FinishingBottomNav>
</template>

<script>
import TopNav from '../navbar/TopNav.vue';
import FinishingBottomNav from '../navbar/FinishingBottomNav.vue';
export default {
    name: "FinishingLinks",
    data() {
        return {};
    },
    props: ["active"],
    computed: {},
    methods: {
        currentRouteName(routeName) {
            return this.$route.name.includes(routeName);
        }
    },
    components: { TopNav, FinishingBottomNav }
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