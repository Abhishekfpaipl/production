<template>
    <div>
        <TopNav>Users</TopNav>
        <div>
            <div class="d-flex container py-3 border-bottom">
                <select class="form-select" aria-label="Default select example">
                    <option selected>All Members</option>
                    <option value="1">Member 1</option>
                    <option value="2">Member 2</option>
                    <option value="3">Member 3</option>
                    <option value="3">Member 4</option>
                    <option value="3">Member 5</option>
                </select>
                <i class="bi bi-funnel mx-2 fs-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#filter"
                    aria-controls="filter"></i>
                <i class="bi bi-search fs-3 mx-2"></i>
                <i class="bi bi-filter fs-3 mx-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#sort"
                    aria-controls="sort"></i>
                <router-link to="/users/create" class="text-dark">

                    <i class="bi bi-plus-circle fs-3 mx-2" type="button"></i>
                </router-link>
            </div>

            <div class="offcanvas offcanvas-bottom" tabindex="-1" id="filter" aria-labelledby="offcanvasBottomLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasBottomLabel">Filter</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div class="offcanvas-body small">
                    Filter
                </div>
            </div>
            <div class="offcanvas offcanvas-bottom" tabindex="-1" id="sort" aria-labelledby="offcanvasBottomLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasBottomLabel">Sort</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div class="offcanvas-body small">
                    Sort
                </div>
            </div>

            <div class="d-flex flex-column mt-2" style="padding-bottom:180px; height: 100vh; overflow-y: scroll;">
                <div v-for="(user, index) in users" :key="index" class="mx-3 m-2 bg-white  border"
                    style="box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em">
                    <div class=" d-flex p-2">
                        <div class="left me-2">
                            <img style="width: 100px; height: 100px;object-fit: fill;" :src="`${publicPath}${user.imgu}`"
                                alt="">
                        </div>
                        <div class="right">
                            <p class="m-0">Name : {{ user.name }}</p>
                            <p class="m-0">Post : {{ user.post }}</p>
                            <p class="m-0">Dept : {{ user.dept }}</p>
                            <p class="m-0">Status : {{ user.status }}</p>

                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="btn-3 d-flex w-100">
                            <button class="btn btn-light w-100 border rounded-0" style="padding: 5px !important;"><i
                                    class="bi bi-telephone fs-6"></i> Call</button>
                            <button class="btn btn-light w-100 border-start-0 border-end-0 border rounded-0 "
                                style="padding: 5px !important;"><i class="bi bi-whatsapp fs-6"></i> Text</button>
                            <RouterLink class="w-100  d-flex justify-content-center" style="text-decoration: none;"
                                to="/create-member">
                                <button class="btn btn-light w-100 border rounded-0 " style="padding: 5px !important;"><i
                                        class="bi bi-pencil-square fs-6"></i> Edit</button>
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>

           

        </div>
    </div>
</template>

<script>
import TopNav from '@/components/navbar/TopNav.vue';
export default {
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    },
    components: {
        TopNav
    },
    computed: {
        users() {
            return this.$store.getters.getUsers;
        }
    }
}
</script>