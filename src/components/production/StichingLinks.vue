<template>
    <div class="nav nav-tabs align-items-center py-2 d-flex justify-content-around px-2"
        style="font-size: 10px; height: 63px; font-weight: 500;box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;"
        id="nav-tab" role="tablist">
        <router-link class="nav-link" :to="{ name: 'Production-Stiching-Single' }"
            :class="currentRouteName === 'Production-Stiching-Single' ? 'active' : ''">Single
            Needle</router-link>

        <router-link class="nav-link " :to="{ name: 'Production-Stiching-Overlock' }"
            :class="currentRouteName === 'Production-Stiching-Overlock' ? 'active' : ''">Overlock</router-link>

        <router-link class="nav-link " :to="{ name: 'Production-Stiching-Wastage' }"
            :class="currentRouteName === 'Production-Stiching-Wastage' ? 'active' : ''">Wastage</router-link>

    </div>
</template>                                                 

<script>
export default {
    name: 'CuttingLinks',
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