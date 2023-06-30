<template>
    <div class="nav nav-tabs align-items-center py-2 d-flex justify-content-around px-2"
        style="font-size: 10px; height: 63px; font-weight: 500;"
        id="nav-tab" role="tablist">
        <router-link class="nav-link" :to="{ name: 'Production-Job-Threading' }"
            :class="currentRouteName === 'Production-Job-Threading' ? 'active' : ''">Threading</router-link>

        <router-link class="nav-link " :to="{ name: 'Production-Job-Dori' }"
            :class="currentRouteName === 'Production-Job-Dori' ? 'active' : ''">Dori</router-link>

        <router-link class="nav-link " :to="{ name: 'Production-Job-Button' }"
            :class="currentRouteName === 'Production-Job-Button' ? 'active' : ''">Button</router-link>

    </div>
</template>                                                 

<script>
export default {
    name: 'JobLinks',
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