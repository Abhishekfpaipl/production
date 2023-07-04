<template>
    <div class="nav nav-tabs align-items-center py-2 d-flex justify-content-around px-2"
        style="font-size: 10px; height: 63px; font-weight: 500;"
        id="nav-tab" role="tablist">
        <router-link class="nav-link" :to="{ name: 'Production-Manager-Collection-Production' }"
            :class="currentRouteName === 'Production-Manager-Collection-Production' ? 'active' : ''">Production</router-link>

        <router-link class="nav-link " :to="{ name: 'Production-Manager-Collection-Fabrication' }"
            :class="currentRouteName === 'Production-Manager-Collection-Fabrication' ? 'active' : ''">Fabrication</router-link>

    </div>
</template>                                                 

<script>
export default {
    name: 'CollectionLinks',
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