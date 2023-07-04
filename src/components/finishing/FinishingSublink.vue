<template>
    <div class="nav nav-tabs py-2 d-flex overflow-x-scroll flex-nowrap ws-nowarp align-items-center"
        style="font-size: 10px; height: 63px; font-weight: 500;" id="nav-tab" role="tablist">

        <RouterLink class="nav-link ws-nowarp" :to="{ name: 'Finishing-Inhand' }"
            :class="currentRouteName('Finishing-Inhand') ? 'active' : ''">
            Inhand
        </RouterLink>
        <router-link class="nav-link ws-nowarp" :to="{ name: 'Finishing-Finishing' }"
            :class="currentRouteName('Finishing-Finishing') ? 'active' : ''">Finishing
        </router-link>
    </div>
</template>

<script>
 

export default {
    name: "FinishingSubLinks",
     
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