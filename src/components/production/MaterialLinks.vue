<template>
    <div class="nav nav-tabs align-items-center py-2 d-flex justify-content-around px-2"
        style="font-size: 10px; height: 63px; font-weight: 500;"
        id="nav-tab" role="tablist">
        <router-link class="nav-link" :to="{ name: 'Production-Material-One' }"
            :class="currentRouteName === 'Production-Material-One' ? 'active' : ''">Material One</router-link>

         <router-link class="nav-link " :to="{ name: 'Production-Material-Two' }"
            :class="currentRouteName === 'Production-Material-Two' ? 'active' : ''">Material Two</router-link>

       <router-link class="nav-link " :to="{ name: 'Production-Material-Three' }"
            :class="currentRouteName === 'Production-Material-Three' ? 'active' : ''">Material Three</router-link>

    </div>
</template>                                                                             

<script>
export default {
    name: 'MaterialLinks',
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