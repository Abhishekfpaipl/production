<template>
    <div class="nav nav-tabs align-items-center py-2 d-flex justify-content-around px-2"
        style="font-size: 10px; height: 63px; font-weight: 500;"
        id="nav-tab" role="tablist">
        <router-link class="nav-link" :to="{ name: 'Production-Manager-Processing-Production' }"
            :class="currentRouteName === 'Production-Manager-Processing-Production' ? 'active' : ''">Production</router-link>

        <router-link class="nav-link " :to="{ name: 'Production-Manager-Processing-Fabrication' }"
            :class="currentRouteName === 'Production-Manager-Processing-Fabrication' ? 'active' : ''">Fabrication</router-link>

    </div>
</template>                                                 

<script>
export default {
    name: 'ProcessingLinks',
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