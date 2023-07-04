<template>
    <div class="container d-flex justify-content-between align-items-center bg-light"
        style="height: 63px !important;box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;">
        <div class="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExampleMenu"
            aria-controls="offcanvasExampleMenu">
            <i class="bi bi-list fs-1"></i>
        </div>
        <div class="">
            <h3>
                <slot>Order</slot>
            </h3>
        </div>

        <!-- Menu -->
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExampleMenu"
            aria-labelledby="offcanvasExampleLabel" style="width:80vw !important">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body p-0">
                <div>
                    <ul class="list-group rounded-0">
                        <router-link to="/sign-up" class="text-decoration-none text-dark">
                            <li class="list-group-item">Login / SignUp</li>
                        </router-link>
                        <router-link to="/login" class="text-decoration-none text-dark">
                            <li class="list-group-item">Profile / Account</li>
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