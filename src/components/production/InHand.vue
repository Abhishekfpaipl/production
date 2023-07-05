<template>
    <div>
        <!-- <ProductionLinks active="Order"></ProductionLinks> -->
        <TopNav>Production</TopNav>
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
                        <th class="py-3" scope="col">Catalogs</th>
                        <th class="py-3" scope="col">Exp.Time</th>
                        <th class="py-3" scope="col">Order</th>
                        <th class="py-3" scope="col">Available</th>
                        <th class="py-3" scope="col">Alloted</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-center" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <th scope="row"><img src="http://dillisix.com/storage/345/-23853.jpg" class="rounded-circle "
                                style="width: 40px; height: 40px; object-fit: cover;" alt=""></th>
                        <td>07 Jul</td>
                        <td>1000</td>
                        <td>500</td>
                        <td>500</td>
                    </tr>
                    <tr class="text-center">
                        <th scope="row"><img src="http://dillisix.com/storage/478/-23528.jpg" class="rounded-circle"
                                style="width: 40px; height: 40px; object-fit: cover;" alt=""></th>
                        <td>07 Jul</td>
                        <td>1000</td>
                        <td>500</td>
                        <td>500</td>
                    </tr>
                    <tr class="text-center">
                        <th scope="row"><img src="http://dillisix.com/storage/534/-23870.jpg" class="rounded-circle"
                                style="width: 40px; height: 40px; object-fit: cover;" alt=""></th>
                        <td>07 Jul</td>
                        <td>1000</td>
                        <td>500</td>
                        <td>500</td>
                    </tr>
                    <tr class="text-center" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <th scope="row"><img src="http://dillisix.com/storage/345/-23853.jpg" class="rounded-circle "
                                style="width: 40px; height: 40px; object-fit: cover;" alt=""></th>
                        <td>07 Jul</td>
                        <td>1000</td>
                        <td>500</td>
                        <td>500</td>
                    </tr>
                    <tr class="text-center">
                        <th scope="row"><img src="http://dillisix.com/storage/478/-23528.jpg" class="rounded-circle"
                                style="width: 40px; height: 40px; object-fit: cover;" alt=""></th>
                        <td>07 Jul</td>
                        <td>1000</td>
                        <td>500</td>
                        <td>500</td>
                    </tr>
                    <tr class="text-center">
                        <th scope="row"><img src="http://dillisix.com/storage/478/-23528.jpg" class="rounded-circle"
                                style="width: 40px; height: 40px; object-fit: cover;" alt=""></th>
                        <td>07 Jul</td>
                        <td>1000</td>
                        <td>500</td>
                        <td>500</td>
                    </tr>
                    <tr class="text-center">
                        <th scope="row"><img src="http://dillisix.com/storage/478/-23528.jpg" class="rounded-circle"
                                style="width: 40px; height: 40px; object-fit: cover;" alt=""></th>
                        <td>07 Jul</td>
                        <td>1000</td>
                        <td>500</td>
                        <td>500</td>
                    </tr>
                    <tr class="text-center">
                        <th scope="row"><img src="http://dillisix.com/storage/478/-23528.jpg" class="rounded-circle"
                                style="width: 40px; height: 40px; object-fit: cover;" alt=""></th>
                        <td>07 Jul</td>
                        <td>1000</td>
                        <td>500</td>
                        <td>500</td>
                    </tr>
                    <tr class="text-center">
                        <th scope="row"><img src="http://dillisix.com/storage/478/-23528.jpg" class="rounded-circle"
                                style="width: 40px; height: 40px; object-fit: cover;" alt=""></th>
                        <td>07 Jul</td>
                        <td>1000</td>
                        <td>500</td>
                        <td>500</td>
                    </tr>
                    <tr class="text-center">
                        <th scope="row"><img src="http://dillisix.com/storage/478/-23528.jpg" class="rounded-circle"
                                style="width: 40px; height: 40px; object-fit: cover;" alt=""></th>
                        <td>07 Jul</td>
                        <td>1000</td>
                        <td>500</td>
                        <td>500</td>
                    </tr>
                    <tr class="text-center">
                        <th scope="row"><img src="http://dillisix.com/storage/478/-23528.jpg" class="rounded-circle"
                                style="width: 40px; height: 40px; object-fit: cover;" alt=""></th>
                        <td>07 Jul</td>
                        <td>1000</td>
                        <td>500</td>
                        <td>500</td>
                    </tr>

                </tbody>
            </table>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                            <p class="fw-bold mb-0">Style ID<span class="fw-normal"> #79887</span></p>
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-2">
                        <div class="d-flex  border-bottom pb-2">
                            <img src="http://dillisix.com/storage/345/-23853.jpg"
                                style="width: 130px; height: 100px; object-fit: cover;" alt="">
                            <div class="ms-2 w-100">
                                <p class="fw-bold mb-1 fs-5"> Pocket Faux Leather Jacket </p>
                                <p class="mb-1">Order Qty: <span> 1,000 pcs</span></p>
                                <!-- <p class="fw-bold mb-0">Rate: <span class="fw-normal"> ₹ 50 + 50</span></p> -->
                                <p class="mb-1">Exp. Time: <span> 12:20 AM, 07 July</span></p>
                            </div>
                        </div>
                        <p class="text-center my-3 m-0 fs-5">Catalog Allotment</p>
                        <div>
                            <select class="form-select mb-3" aria-label="Default select example">
                                <option selected>Select Department</option>
                                <option value="1">Single Needle Operator</option>
                                <option value="2">Over Lock Operator</option>

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
                             
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">Available Quantity</span>
                                <input type="number" readonly value="500"  class="form-control"   
                                    aria-describedby="basic-addon1">
                            </div>
                            <div class="form-floating mb-3">
                                <input type="number" value="500" class="form-control" id="floatingInput"
                                    placeholder="Catalog Quantity">
                                <label for="floatingInput">Catalog Quantity</label>
                            </div>
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
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="floatingInput" placeholder="Catalog Quantity">
                    <label for="floatingInput">Catalog Quantity</label>
                </div>
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

    </div>
    <ProductionBottomnav></ProductionBottomnav>
    
</template>

<script>

// import ProductionLinks from './ProductionLinks.vue';
import TopNav from '../navbar/TopNav.vue'
import ProductionBottomnav from '../navbar/ProductionBottomnav.vue';
export default {
    components: { ProductionBottomnav, TopNav }
}
</script>

<style lang="scss" scoped></style>