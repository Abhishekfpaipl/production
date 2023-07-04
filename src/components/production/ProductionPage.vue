<template>
    <div style="padding-bottom: 80px;">
        <TopNav> Production</TopNav>
        <div class="d-flex container py-3 border-bottom">
            <select class="form-select" aria-label="Default select example">
                <option selected>All Departments</option>
                <option value="1">Department 1</option>
                <option value="2">Department 2</option>
                <option value="3">Department 3</option>
                <option value="3">Department 4</option>
                <option value="3">Department 5</option>
            </select>
            <i class="bi bi-funnel mx-2 fs-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#filter"
                aria-controls="filter"></i>
            <i class="bi bi-search fs-3 mx-2"></i>
            <i class="bi bi-filter fs-3 mx-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#sort"
                aria-controls="sort"></i>
            <i class="bi bi-plus-circle fs-3 mx-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#select"
                aria-controls="select"></i>
        </div>
        <div class="container">
            <table class="table table-striped table-hover">
                <thead>
                    <tr style="font-size: 13px;">
                        <th class="py-3" scope="col">Worker</th>
                        <th class="py-3" scope="col">Allot</th>
                        <th class="py-3" scope="col">Pending</th>
                        <th class="py-3" scope="col">Due</th>
                        <th class="py-3" scope="col">Loss</th>
                        <th class="py-3" scope="col">Finish</th>
                    </tr>
                </thead>
                <tbody>
                    <tr data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <th scope="row"><img src="http://dillisix.com/storage/83/IMG20230404151417.jpg"
                                class="rounded-circle " style="width: 35px; height: 35px; object-fit: cover;" alt=""></th>
                        <td>1000</td>
                        <td>3000</td>
                        <td>6000</td>
                        <td>3000</td>
                        <td>8000</td>
                    </tr>
                    <tr>
                        <th scope="row"><img src="http://dillisix.com/storage/54/kedar.jpg" class="rounded-circle"
                                style="width: 35px; height: 35px; object-fit: cover;" alt=""></th>
                        <td>9000</td>
                        <td>3000</td>
                        <td>6000</td>
                        <td>5000</td>
                        <td>2000</td>
                    </tr>
                    <tr>
                        <th scope="row"><img src="http://dillisix.com/storage/53/narender-profile-image.jpeg"
                                class="rounded-circle" style="width: 35px; height: 35px; object-fit: cover;" alt=""></th>
                        <td>1000</td>
                        <td>1000</td>
                        <td>1000</td>
                        <td>1000</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <th scope="row"><img src="http://dillisix.com/storage/83/IMG20230404151417.jpg"
                                class="rounded-circle " style="width: 35px; height: 35px; object-fit: cover;" alt=""></th>
                        <td>1000</td>
                        <td>3000</td>
                        <td>6000</td>
                        <td>3000</td>
                        <td>8000</td>
                    </tr>
                    <tr>
                        <th scope="row"><img src="http://dillisix.com/storage/54/kedar.jpg" class="rounded-circle"
                                style="width: 35px; height: 35px; object-fit: cover;" alt=""></th>
                        <td>9000</td>
                        <td>3000</td>
                        <td>6000</td>
                        <td>5000</td>
                        <td>2000</td>
                    </tr>
                    <tr>
                        <th scope="row"><img src="http://dillisix.com/storage/53/narender-profile-image.jpeg"
                                class="rounded-circle" style="width: 35px; height: 35px; object-fit: cover;" alt=""></th>
                        <td>1000</td>
                        <td>1000</td>
                        <td>1000</td>
                        <td>1000</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <th scope="row"><img src="http://dillisix.com/storage/83/IMG20230404151417.jpg"
                                class="rounded-circle " style="width: 35px; height: 35px; object-fit: cover;" alt=""></th>
                        <td>1000</td>
                        <td>3000</td>
                        <td>6000</td>
                        <td>3000</td>
                        <td>8000</td>
                    </tr>
                    <tr>
                        <th scope="row"><img src="http://dillisix.com/storage/54/kedar.jpg" class="rounded-circle"
                                style="width: 35px; height: 35px; object-fit: cover;" alt=""></th>
                        <td>9000</td>
                        <td>3000</td>
                        <td>6000</td>
                        <td>5000</td>
                        <td>2000</td>
                    </tr>
                    <tr>
                        <th scope="row"><img src="http://dillisix.com/storage/53/narender-profile-image.jpeg"
                                class="rounded-circle" style="width: 35px; height: 35px; object-fit: cover;" alt=""></th>
                        <td>1000</td>
                        <td>1000</td>
                        <td>1000</td>
                        <td>1000</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <th scope="row"><img src="http://dillisix.com/storage/83/IMG20230404151417.jpg"
                                class="rounded-circle " style="width: 35px; height: 35px; object-fit: cover;" alt=""></th>
                        <td>1000</td>
                        <td>3000</td>
                        <td>6000</td>
                        <td>3000</td>
                        <td>8000</td>
                    </tr>
                    <tr>
                        <th scope="row"><img src="http://dillisix.com/storage/54/kedar.jpg" class="rounded-circle"
                                style="width: 35px; height: 35px; object-fit: cover;" alt=""></th>
                        <td>9000</td>
                        <td>3000</td>
                        <td>6000</td>
                        <td>5000</td>
                        <td>2000</td>
                    </tr>
                    <tr>
                        <th scope="row"><img src="http://dillisix.com/storage/53/narender-profile-image.jpeg"
                                class="rounded-circle" style="width: 35px; height: 35px; object-fit: cover;" alt=""></th>
                        <td>1000</td>
                        <td>1000</td>
                        <td>1000</td>
                        <td>1000</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <th scope="row"><img src="http://dillisix.com/storage/83/IMG20230404151417.jpg"
                                class="rounded-circle " style="width: 35px; height: 35px; object-fit: cover;" alt=""></th>
                        <td>1000</td>
                        <td>3000</td>
                        <td>6000</td>
                        <td>3000</td>
                        <td>8000</td>
                    </tr>
                    <tr>
                        <th scope="row"><img src="http://dillisix.com/storage/54/kedar.jpg" class="rounded-circle"
                                style="width: 35px; height: 35px; object-fit: cover;" alt=""></th>
                        <td>9000</td>
                        <td>3000</td>
                        <td>6000</td>
                        <td>5000</td>
                        <td>2000</td>
                    </tr>
                    <tr>
                        <th scope="row"><img src="http://dillisix.com/storage/53/narender-profile-image.jpeg"
                                class="rounded-circle" style="width: 35px; height: 35px; object-fit: cover;" alt=""></th>
                        <td>1000</td>
                        <td>1000</td>
                        <td>1000</td>
                        <td>1000</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <th scope="row"><img src="http://dillisix.com/storage/83/IMG20230404151417.jpg"
                                class="rounded-circle " style="width: 35px; height: 35px; object-fit: cover;" alt=""></th>
                        <td>1000</td>
                        <td>3000</td>
                        <td>6000</td>
                        <td>3000</td>
                        <td>8000</td>
                    </tr>
                    <tr>
                        <th scope="row"><img src="http://dillisix.com/storage/54/kedar.jpg" class="rounded-circle"
                                style="width: 35px; height: 35px; object-fit: cover;" alt=""></th>
                        <td>9000</td>
                        <td>3000</td>
                        <td>6000</td>
                        <td>5000</td>
                        <td>2000</td>
                    </tr>
                    <tr>
                        <th scope="row"><img src="http://dillisix.com/storage/53/narender-profile-image.jpeg"
                                class="rounded-circle" style="width: 35px; height: 35px; object-fit: cover;" alt=""></th>
                        <td>1000</td>
                        <td>1000</td>
                        <td>1000</td>
                        <td>1000</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <th scope="row"><img src="http://dillisix.com/storage/83/IMG20230404151417.jpg"
                                class="rounded-circle " style="width: 35px; height: 35px; object-fit: cover;" alt=""></th>
                        <td>1000</td>
                        <td>3000</td>
                        <td>6000</td>
                        <td>3000</td>
                        <td>8000</td>
                    </tr>
                    <tr>
                        <th scope="row"><img src="http://dillisix.com/storage/54/kedar.jpg" class="rounded-circle"
                                style="width: 35px; height: 35px; object-fit: cover;" alt=""></th>
                        <td>9000</td>
                        <td>3000</td>
                        <td>6000</td>
                        <td>5000</td>
                        <td>2000</td>
                    </tr>
                    <tr>
                        <th scope="row"><img src="http://dillisix.com/storage/53/narender-profile-image.jpeg"
                                class="rounded-circle" style="width: 35px; height: 35px; object-fit: cover;" alt=""></th>
                        <td>1000</td>
                        <td>1000</td>
                        <td>1000</td>
                        <td>1000</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <th scope="row"><img src="http://dillisix.com/storage/83/IMG20230404151417.jpg"
                                class="rounded-circle " style="width: 35px; height: 35px; object-fit: cover;" alt=""></th>
                        <td>1000</td>
                        <td>3000</td>
                        <td>6000</td>
                        <td>3000</td>
                        <td>8000</td>
                    </tr>
                    <tr>
                        <th scope="row"><img src="http://dillisix.com/storage/54/kedar.jpg" class="rounded-circle"
                                style="width: 35px; height: 35px; object-fit: cover;" alt=""></th>
                        <td>9000</td>
                        <td>3000</td>
                        <td>6000</td>
                        <td>5000</td>
                        <td>2000</td>
                    </tr>
                    <tr>
                        <th scope="row"><img src="http://dillisix.com/storage/53/narender-profile-image.jpeg"
                                class="rounded-circle" style="width: 35px; height: 35px; object-fit: cover;" alt=""></th>
                        <td>1000</td>
                        <td>1000</td>
                        <td>1000</td>
                        <td>1000</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <th scope="row"><img src="http://dillisix.com/storage/83/IMG20230404151417.jpg"
                                class="rounded-circle " style="width: 35px; height: 35px; object-fit: cover;" alt=""></th>
                        <td>1000</td>
                        <td>3000</td>
                        <td>6000</td>
                        <td>3000</td>
                        <td>8000</td>
                    </tr>
                    <tr>
                        <th scope="row"><img src="http://dillisix.com/storage/54/kedar.jpg" class="rounded-circle"
                                style="width: 35px; height: 35px; object-fit: cover;" alt=""></th>
                        <td>9000</td>
                        <td>3000</td>
                        <td>6000</td>
                        <td>5000</td>
                        <td>2000</td>
                    </tr>
                    <tr>
                        <th scope="row"><img src="http://dillisix.com/storage/53/narender-profile-image.jpeg"
                                class="rounded-circle" style="width: 35px; height: 35px; object-fit: cover;" alt=""></th>
                        <td>1000</td>
                        <td>1000</td>
                        <td>1000</td>
                        <td>1000</td>
                        <td>1000</td>
                    </tr>
                </tbody>
            </table>
        </div>


        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="d-flex justify-content-center">
                            <img src="http://dillisix.com/storage/83/IMG20230404151417.jpg" class="rounded"
                                style="width: 100px; height: 100px; object-fit: cover;" alt="">
                        </div>
                        <p class="text-center fw-bold mt-3">Worker 1</p>

                    </div>

                </div>
            </div>
        </div>


        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="filter" aria-labelledby="offcanvasBottomLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body small">
                Filter
            </div>
        </div>
        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="sort" aria-labelledby="offcanvasBottomLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body small">
                Sort
            </div>
        </div>
        <div class="offcanvas offcanvas-bottom" style="height: 80vh;" tabindex="-1" id="select"
            aria-labelledby="offcanvasBottomLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasBottomLabel">Create New Work Allotment</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <select class="form-select mb-3" aria-label="Default select example">
                    <option selected>Select Department</option>
                    <option value="1">Department 1</option>
                    <option value="2">Department 2</option>
                    <option value="3">Department 3</option>
                    <option value="4">Department 4</option>
                    <option value="5">Department 5</option>
                    <option value="6">Department 6</option>
                </select>
                <select class="form-select my-3" aria-label="Default select example">
                    <option selected>Select Worker</option>
                    <option value="1">Worker 1</option>
                    <option value="2">Worker 2</option>
                    <option value="3">Worker 3</option>
                    <option value="4">Worker 4</option>
                    <option value="5">Worker 5</option>
                    <option value="6">Worker 6</option>
                    <option value="1">Worker 7</option>
                    <option value="2">Worker 8</option>
                    <option value="3">Worker 9</option>
                    <option value="4">Worker 10</option>
                    <option value="5">Worker 11</option>
                    <option value="6">Worker 12</option>
                </select>
                <select class="form-select my-3" aria-label="Default select example">
                    <option selected>Select Catalog</option>
                    <option value="1">#156871</option>
                    <option value="2">#156872</option>
                    <option value="3">#156873</option>
                    <option value="4">#156874</option>
                    <option value="5">#156875</option>
                    <option value="6">#156876</option>
                </select>
                <div class="d-flex w-100 my-3">
                    <div class="mb-2 mx-2 w-50">
                        <label for="date" class="form-label ms-1">Expected Date</label>
                        <input type="date" class="form-control" id="date">
                    </div>
                    <div class="mb-2  mx-2 w-50">
                        <label for="time" class="form-label ms-1">Expected Time</label>
                        <input type="time" class="form-control" id="time">
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <button class="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
        <ProductionBottomnav></ProductionBottomnav>
    </div>
</template>

<script>
import ProductionBottomnav from '../navbar/ProductionBottomnav.vue';
import TopNav from '../navbar/TopNav.vue';
export default {
    components: { ProductionBottomnav, TopNav }
}
</script>

<style lang="scss" scoped></style>