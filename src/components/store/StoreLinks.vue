<template>
     <div class="container d-flex justify-content-between align-items-center bg-light"
        style="height: 63px !important;box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;">
        <div class="">
           <i class="bi bi-list fs-1"></i>
        </div>
        <div class="">
            <h3>Store</h3>
        </div>
    </div>
    <div class="nav nav-tabs align-items-center py-2 d-flex justify-content-around px-2"
        style="font-size: 10px; height: 63px; font-weight: 500;box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;"
        id="nav-tab" role="tablist">
        <router-link class="nav-link" to="inward" :class="active === 'Inward' ? 'active' : ''">Purchase
        </router-link>
        <router-link class="nav-link " :class="active === 'Store' ? 'active' : ''" to="store">Store</router-link>
        <router-link class="nav-link " :class="active === 'Cutting' ? 'active' : ''" to="cutting">Cutting</router-link>

    </div>
</template>

<script>
export default {
    name: 'StoreLink',
    props: ['active']
}
</script>
<style>
.nav-link {
    color: grey
}
</style>