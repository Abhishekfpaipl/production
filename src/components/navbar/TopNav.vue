<template>
    <!-- <div class="container d-flex justify-content-between align-items-center bg-light"
        style="height: 63px !important;box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;">
        <div class="">
            <h3>Fabricator</h3>
        </div>
        <div class="d-flex justify-content-between gap-2">
            <i class="bi bi-house fs-4"></i>
            <i class="bi bi-shop-window fs-4"></i>
            <i class="bi bi-gear fs-4"></i>
        </div>
    </div> -->
    <div class="px-2 d-flex justify-content-between align-items-center bg-light"
        style="height: 63px !important;box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;">
        <div class="">
            <h3><slot>Order</slot></h3>
        </div>
        <div class="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExampleMenu"
            aria-controls="offcanvasExampleMenu">
            <i class="bi bi-list fs-1"></i>
        </div>

        <!-- Menu -->
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExampleMenu"
            aria-labelledby="offcanvasExampleLabel" style="width:80vw !important">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body p-0">
                <div>
                    <ul class="list-group rounded-0">
                        <router-link to="/sign-up" class="text-decoration-none text-dark ">
                            <li class="list-group-item ">Login / SignUp</li>
                        </router-link>

                        <router-link to="/login" class="text-decoration-none text-dark">
                            <li class="list-group-item border-top-0">Profile / Account</li>
                        </router-link>

                        <router-link to="/production-manager/order" class="text-decoration-none text-dark">
                            <li class="list-group-item border-top-0">Production Manager</li>
                        </router-link>

                        <router-link to="/order/new" class="text-decoration-none text-dark">
                            <li class="list-group-item border-top-0">Order Manager</li>
                        </router-link>
                        
                        <!-- <router-link to="/store/inward" class="text-decoration-none text-dark">
                            <li class="list-group-item border-top-0">Store Manager</li>
                        </router-link> -->

                        <router-link to="/cutting" class="text-decoration-none text-dark">
                            <li class="list-group-item border-top-0">Cutting Manager</li>
                        </router-link>

                        <router-link to="/production/order" class="text-decoration-none text-dark">
                            <li class="list-group-item border-top-0">Line Manager</li>
                        </router-link>

                        <router-link to="/finishing" class="text-decoration-none text-dark">
                            <li class="list-group-item border-top-0">Finishing Manager</li>
                        </router-link>

                        <router-link to="" class="text-decoration-none text-dark">
                            <li class="list-group-item border-top-0">Fabrication</li>
                        </router-link>

                        <router-link to="" class="text-decoration-none text-dark">
                            <li class="list-group-item border-top-0">Fabricator</li>
                        </router-link>

                        <router-link to="/users" class="text-decoration-none text-dark">
                            <li class="list-group-item border-top-0">Users</li>
                        </router-link>
                       
                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'TopNav',

}
</script>

<style scoped></style>