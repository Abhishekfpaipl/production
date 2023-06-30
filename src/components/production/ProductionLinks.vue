<template>
    <div class="nav nav-tabs py-2 d-flex overflow-x-scroll flex-nowrap ws-nowarp align-items-center"
        style="font-size: 10px; height: 63px; font-weight: 500;"
        id="nav-tab" role="tablist">
        <router-link class="nav-link ws-nowarp" :to="{ name: 'Production-Order' }"
            :class="currentRouteName('Production-Order') ? 'active' : ''">Order
        </router-link>

        <router-link class="nav-link ws-nowarp" :to="{ name: 'Production-Stiching-Single' }"
            :class="currentRouteName('Production-Stiching-Single') ? 'active' : ''">Stiching</router-link>

        <router-link class="nav-link ws-nowarp " :to="{ name: 'Production-Job-Threading' }"
            :class="currentRouteName ('Production-Job-Threading') ? 'active' : ''">Job
            Work</router-link>

         <router-link class="nav-link ws-nowarp " :to="{name:'Production-Material-One'}"
            :class="currentRouteName('Production-Material-One') ? 'active' : ''">Material</router-link>

          <router-link class="nav-link ws-nowarp " :to="{name:'Production-Overheads'}"
            :class="currentRouteName('Production-Overheads') ? 'active' : ''">Overheads</router-link>

        <router-link class="nav-link ws-nowarp " :to="{name:'Production-Finishing'}"
            :class="currentRouteName('Production-Finishing') ? 'active' : ''">Finishing</router-link>

    </div>
</template>

<script>
export default {
    name: 'ProductionLinks',
    data() {
        return {
            // links:[
            //     {route:''}
            // ]
        }
    },
    props: ['active'],
    computed: {
        // currentRouteName() {
        //     return this.$route.name;
        // }
    },
    methods: {
        currentRouteName(routeName) {
            return this.$route.name.includes(routeName);
        }

    }
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