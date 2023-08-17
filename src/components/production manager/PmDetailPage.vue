<template>
    <div class="pb-5">
        <!-- ----------Top-----------------  -->
        <div class="pt-0 px-0" style="background-color: #e8e8e8; position: sticky; top: 0; z-index: 999;">
            <div class="container p-2 border-bottom ">
                <div class="d-flex justify-content-between ">
                    <div class="d-flex align-items-center ">
                        <img :src="`${publicPath}${manager.img}`" class="rounded-circle"
                            style="height:60px;width:60px; object-fit: fill;">
                        <div class="ms-3">
                            <p class="m-0 fw-bold" style="font-size: 1.2rem;">#{{ manager.style }}</p>
                            <p class="m-0">Order Qty : {{ manager.costing }}</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center ">

                        <RouterLink to="/production-manager/order">
                            <button type="button" class="btn">
                                <i class="bi bi-x fs-4"></i>
                            </button>
                        </RouterLink>
                    </div>
                </div>

            </div>
        </div>
        <!-- ----------Top-----------------  -->

        <!-- ----------Detail-----------------  -->
        <div class="container" v-if="!show">
            <div class=" mt-3">
                <div class="border p-2 py-3  text-white w-100 rounded-top" data-bs-toggle="collapse"
                    data-bs-target="#detail" aria-expanded="false" aria-controls="detail"
                    style="background-color: #28CC9E;">
                    Detail
                </div>
            </div>
            <div class="collapse container" id="detail">
                <img :src="`${publicPath}${manager.img}`" style=" width: 100%;  object-fit: fill;">
                <div class="box mt-2">
                    <table class="table table-striped table-hover ">
                        <tbody>
                            <tr>
                                <th scope="row">Name</th>
                                <td class="text-muted">{{ manager.name }}</td>
                            </tr>
                            <tr>
                                <th scope="row">Sale Price</th>
                                <td class="text-muted">{{ manager.sp }}</td>
                            </tr>
                            <tr>
                                <th scope="row">Panna</th>
                                <td class="text-muted">{{ manager.panna }}</td>
                            </tr>
                            <tr>
                                <th scope="row">Fc / Piece</th>
                                <td class="text-muted">{{ manager.fc }}</td>
                            </tr>
                            <tr>
                                <th scope="row">Search Tags</th>
                                <td class="text-muted">{{ manager.stag }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- ----------Detail-----------------  -->

        <h4 class="text-center mb-3 mt-4">Shop Order Details</h4>
        
        <!-- --------Po Placed-------------  -->
        <div class="container" v-if="!show">
            <div class="border p-2 py-3  text-white w-100 rounded-top" data-bs-toggle="collapse" data-bs-target="#Poplaced"
                aria-expanded="false" aria-controls="Poplaced" style="background-color: #28CC9E;">
                PO Placed
            </div>
            <div class="overflow-x-scroll bg-white collapse" id="Poplaced">
                <table class="table table-responsive table-striped  border border-1">
                    <thead>
                        <tr>
                            <th scope="col">
                                <div class="d-flex flex-column align-items-center">
                                    <p class="m-0">{{ skuCount }}</p>
                                    <p class="m-0" style="font-size: 12px;">SKU</p>
                                </div>
                            </th>
                            <th scope="col" class="text-center" v-for="(size, index) in manager.sizes" :key="index">
                                <div class="fw-bold" style="">
                                    <p class="">{{ size.name }}</p>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(color, colorIndex) in manager.colors" :key="colorIndex">
                            <td class="">
                                <div class="rounded-circle m-2 px-1 align-items-center justify-content-center d-flex"
                                    style="width: 30px; height: 30px;" :style="'background-color :' + color.bg">
                                </div>
                            </td>
                            <td v-for="(z, sizeIndex) in manager.sizes" :key="sizeIndex">
                                <input type="number" class="form-control text-center"
                                    v-model="quantities[colorIndex][sizeIndex]">

                            </td>
                        </tr>
                        <tr scope="row">
                            <th>Qty</th>
                            <td class="text-center" v-for="(size, sizeindex) in  manager.sizes" :key="sizeindex">
                                {{ calculateQty(sizeindex) }}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="container mb-3 ">
                    <div class=" d-flex justify-content-between mx-3 py-2 px-4 border" style="background-color: #e8e8e8;">
                        <p class=" mb-0">Actual Ordered Qty</p>
                        <p class=" fw-bold text-center mb-0">
                            {{ calculateTotalQty }} pcs
                        </p>
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <button class="btn btn-primary">Update</button>
                </div>
            </div>

        </div>
        <!-- --------Po Placed-------------  -->

        <!-- --------Final Order-------------  -->
        <div class="container mt-4">
            <div class="border p-2 py-3  text-white w-100 rounded-top" data-bs-toggle="collapse"
                data-bs-target="#OrderReceived" aria-expanded="false" aria-controls="OrderReceived"
                style="background-color: #28CC9E;">
                Final Order
            </div>
            <div class="overflow-x-scroll bg-white collapse" id="OrderReceived">
                <table class="table table-responsive table-striped  border border-1">
                    <thead>
                        <tr>
                            <th scope="col">
                                <div class="d-flex flex-column align-items-center">
                                    <p class="m-0">{{ skuCount }}</p>
                                    <p class="m-0" style="font-size: 12px;">SKU</p>
                                </div>
                            </th>
                            <th scope="col" class="text-center" v-for="(size, index) in manager.sizes" :key="index">
                                <div class="fw-bold" style="">
                                    <p class="">{{ size.name }}</p>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(color, colorIndex) in manager.colors" :key="colorIndex">
                            <td class="">
                                <div class="rounded-circle m-2 px-1 align-items-center justify-content-center d-flex"
                                    style="width: 30px; height: 30px;" :style="'background-color :' + color.bg">
                                </div>
                            </td>
                            <td v-for="(z, sizeIndex) in manager.sizes" :key="sizeIndex">
                                <input type="number" class="form-control text-center"
                                    v-model="quantities[colorIndex][sizeIndex]">

                            </td>
                        </tr>
                        <tr scope="row">
                            <th>Qty</th>
                            <td class="text-center" v-for="(size, sizeindex) in  manager.sizes" :key="sizeindex">
                                {{ calculateQty(sizeindex) }}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="container mb-3 ">
                    <div class=" d-flex justify-content-between mx-3 py-2 px-4 border" style="background-color: #e8e8e8;">
                        <p class=" mb-0">Actual Ordered Qty</p>
                        <p class=" fw-bold text-center mb-0">
                            {{ calculateTotalQty }} pcs
                        </p>
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <button class="btn btn-primary">Update</button>
                </div>
            </div>

        </div>
        <!-- --------Final Order-------------  -->

        <h4 class="text-center mb-3 mt-4">Production Management</h4>

        <!-- ---------New Jobs------------/ -->
        <div class="container mt-4" v-if="!show">
            <div class="text-white px-2 py-3 rounded-top" data-bs-toggle="collapse" data-bs-target="#Newjobs"
                aria-expanded="false" aria-controls="Newjobs" style="background-color: #28CC9E;">New Jobs</div>
            <div class="collapse show border" id="Newjobs">
                <div class="px-2 py-3">
                    <div class="input-group mb-3 w-100">
                        <span class="input-group-text w-75" id="basic-addon1">Order Quantity</span>
                        <input style="background-color: #f8f9fa;" type="number" readonly value="1000"
                            class="form-control w-25" aria-describedby="basic-addon1">
                    </div>
                    <div class="input-group mb-3 w-100">
                        <span class="input-group-text w-75" id="basic-addon1">Available Order
                            Quantity</span>
                        <input style="background-color: #f8f9fa;" type="number" readonly value="500"
                            class="form-control w-25" aria-describedby="basic-addon1">
                    </div>
                    <select class="form-select my-3" aria-label="Default select example">
                        <option selected>Select Assignee</option>
                        <option v-for="(user, index) in users" :key="index" value="1">{{ user.name }}</option>
                    </select>
                    <div class="form-floating mb-3">
                        <input type="number" class="form-control" id="floatingInput" placeholder="Catalog Quantity">
                        <label for="floatingInput">Issued Quantity</label>
                    </div>
                    <div class="d-flex w-100 my-3">
                        <div class="mb-2 mx-2 w-50">
                            <label for="date" class="form-label ms-1">Expected Date</label>
                            <input type="date" class="form-control" id="date" v-model="selectedDate">
                        </div>
                        <div class="mb-2  mx-2 w-50">
                            <label for="time" class="form-label ms-1">Expected Time</label>
                            <input type="time" class="form-control" id="time" v-model="selectedTime">
                        </div>
                    </div>
                    <div class="d-flex justify-content-center mb-3">
                        <button class="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- ----------New Jobs-----------/ -->


        <!-- ----------Running Jobs--------------- -->
        <div class="container mt-4 " v-if="!show">
            <div>
                <div class="d-flex justify-content-between   fw-bold text-white px-2 py-3 rounded-top" style="background-color: #28CC9E;">

                    <div class="mx-2 d-flex justify-content-center">
                        Inchrg
                    </div>

                    <div class="mx-2 text-center">
                        Issued
                    </div>

                    <div class="mx-2 text-center">
                        Recv.
                    </div>

                    <div class="text-center  mx-2">
                        Lost
                    </div>

                    <div class="mx-2 text-center">
                        Balance
                    </div>
 
                </div>
                <div class="d-flex flex-column" v-for="(issue, index) in issues" :key="index">
                    <IssuedJob :index="index" :issue="issue"></IssuedJob>
                </div>
            </div>

        </div>
        <!-- ----------Running Jobs--------------- -->


        <!-- ---------Completed Jobs------------/ -->
        <div class="container mt-4">
            <!-- <h4 class="text-center mb-3 mt-4">Production Order Details</h4> -->
            <p class="text-white px-2 py-3 rounded-top  " data-bs-toggle="collapse" data-bs-target="#ProdStatus"
                aria-expanded="false" aria-controls="ProdStatus" style="background-color: #28CC9E;">Completed Jobs
            </p>
            <div class="overflow-x-scroll collapse " id="ProdStatus">
                <table class="table table-responsive table-striped table-hover ">
                    <thead>
                        <tr style="font-size: 13px;">
                            <th class="py-3 text-center" scope="col">Incharge</th>
                            <th class="py-3 text-center" scope="col">Issued</th>
                            <th class="py-3 text-center" scope="col">Lost</th>
                            <th class="py-3 text-center" scope="col">Recv.</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in items" :key="index">
                            <td class="d-flex justify-content-center"><img :src="item.img" class="rounded-circle "
                                    style="width: 45px; height: 45px; object-fit: cover;" alt="">
                            </td>
                            <td class="text-center">{{ item.issue }} <p class=" m-0 " style="font-size: 10px;">
                                    {{ item.issueDate }}</p>
                            </td>
                            <td class="text-center">{{ item.loss }} <p class=" m-0" style="font-size: 10px;">
                                    {{ item.lossDate }}</p>
                            </td>
                            <td class="text-center">{{ item.recv }} <p class=" m-0" style="font-size: 10px;">
                                    {{ item.recvDate }}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- ---------Completed Jobs------------/ -->


        <h4 class="text-center mb-3 mt-4">Shop Order Management</h4>


        <!-- ---------Chat Page---------- -->
        <div class="container mt-4">
            <div>
                <div class="mt-3">
                    <div class="d-flex align-items-center">
                        <div class="border p-2 py-3  rounded-top  text-white w-100" style="background-color: #28CC9E;"
                            data-bs-toggle="collapse" data-bs-target="#collapseExampleNew" aria-expanded="false"
                            aria-controls="collapseExampleNew">
                            Order Transactions
                        </div>

                    </div>
                    <div class="collapse show bg-white p-2" id="collapseExampleNew">
                        <div v-for="message in messages" :key="message.id" :class="message.type">
                            <div class="message mt-3 mb-2 d-flex flex-column"
                                style="width: calc(100% - 40px) !important; margin-left:auto; margin-right: 0;">
                                <div class="d-flex   align-items-center">
                                    <i class="bi bi-person fs-4 border rounded-circle me-2"
                                        style="padding: 5px 10px !important;"></i>
                                    <div class="message-content border w-100 "
                                        style=" background-color: #28CC9E; word-wrap: break-word; padding: 10px !important; border-radius: 8px; border-top-right-radius: 15px; border-bottom-left-radius: 15px; border-bottom-right-radius: 0px !important; color: white;">
                                        <p class="m0">
                                            <strong>{{ message.title }}</strong>: {{ message.text }}
                                        </p>
                                    </div>
                                </div>
                                <div class="text-end text-muted " style="font-size: 10px;">{{ message.timestamp2 }},
                                    {{ message.timestamp }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border bg-white" v-if="isVisible">
                    <div class="container pb-2 ">
                        <div class="form-check border-bottom py-2 " v-for="(action_name, index) in inputList" :key="index">
                            <div class="d-flex align-items-center">
                                <input class="form-check-input" :ID="'radio' + index" type="radio" :value="action_name"
                                    v-model="actionName">
                                <label class="form-check-label w-100" :for="'radio' + index">
                                    <span><i :class="action_name.icon" class="fs-4 mx-3"></i></span>
                                    <span class="text-capitalize">{{ action_name.title }}</span>
                                </label>
                            </div>
                        </div>

                        <div class=" d-flex bg-light p-2 align-items-center">
                            <input v-model="actionValue" type="text" class="form-control"
                                placeholder="Type your message..." />
                            <div @click="sendMessage" class="ms-2 "><i class="bi bi-telegram fs-1 p-3"
                                    style="color: #28CC9E;"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- ---------Chat Page---------- -->

        <div class="d-flex justify-content-between container my-4 w-100">
            <div class="d-flex justify-content-center">
                <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-danger"> Shop Order
                    </button>
            </div>

            <div class="d-flex justify-content-center">
                <button class="btn btn-danger" :disabled="btnDisable" @click="btnCompleted" data-bs-toggle="collapse"
                    data-bs-target="#ProdStatus" aria-expanded="false" aria-controls="ProdStatus">Production Order</button>
            </div>
        </div>

        <!-- ------------Chat close Modal-----------  -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Order Completed</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-center">
                        <p>Are you sure you have received <br> <b> Quantity of this
                                Order</b></p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light border" style="width: 30%;"
                            data-bs-dismiss="modal">Close</button>
                        <button @click="hideDiv()" data-bs-dismiss="modal" style="width: 30%;" type="button"
                            class="btn btn-light border">Yes</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- ------------Chat close Modal-----------  -->


    </div>
</template>

<script>
import IssuedJob from './IssuedJob.vue';
export default {
    data() {
        return {
            isVisible: true,
            show: false,
            btnDisable: false,
            quantities: [],
            publicPath: process.env.BASE_URL,
            inputData: "",
            actionName: [],
            actionValue: '',
            showActionModal: false,
            inputList: [
                {
                    title: 'Balance Quantity',
                    icon: 'bi bi-pause-btn'
                },
                {
                    title: 'Ready Quantity',
                    icon: 'bi bi-check2'
                },
                {
                    title: 'Sending Request',
                    icon: 'bi bi-envelope'
                },
                {
                    title: 'Dispatched Quantity',
                    icon: 'bi bi-truck'
                },
                {
                    title: 'Received Quantity',
                    icon: 'bi bi-check2-all'
                },
                {
                    title: 'Chat Message',
                    icon: 'bi bi-chat-dots'
                },

            ],
            displayData: "",
            messages: [],
            selectedDate: '',
            selectedTime: '',

            availableQuantity: 800,
            collectedQuantity: null,
            lossQuantity: null,

        };
    },
    components: {
        IssuedJob
    },
    computed: {
        items() {
            return this.$store.getters.getItems;
        },
        issues() {
            return this.$store.getters.getIssues;
        },
        item() {
            return this.$store.getters.getitem;
        },
        users() {
            return this.$store.getters.getUsers;
        },
        manager() {
            let managerId = this.$route.params.managerId;
            return this.$store.getters.getManager(managerId);
        },
        skuCount() {
            return this.manager.colors.length * this.manager.sizes.length;
        },
        calculateQty() {
            return (sizeIndex) => {
                let qtyTotal = 0;
                for (let colorIndex = 0; colorIndex < this.manager.colors.length; colorIndex++) {
                    const quantity = this.quantities[colorIndex][sizeIndex] || 0;
                    qtyTotal += parseInt(quantity);
                }
                return qtyTotal;
            };
        },
        calculateTotalQty() {
            let totalQty = 0;
            for (let colorIndex = 0; colorIndex < this.manager.colors.length; colorIndex++) {
                for (let sizeIndex = 0; sizeIndex < this.manager.sizes.length; sizeIndex++) {
                    const quantity = this.quantities[colorIndex][sizeIndex];
                    if (quantity) {
                        totalQty += parseInt(quantity);
                    }
                }
            }
            return totalQty;
        },

    },
    methods: {
        hideDiv() {
            this.isVisible = false;
        },
        btnCompleted() {
            this.show = !this.show;
            this.btnDisable = true; // Disable the button
        },
        sendMessage() {
            if (this.actionValue.trim() !== '') {
                const message = {
                    id: Date.now(),
                    text: this.actionValue,
                    title: this.actionName.title,
                    timestamp: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long' }),
                    timestamp2: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    type: 'outgoing',
                };
                this.messages.push(message);
                this.actionName = [];
                this.actionValue = '';
                this.showActionModal = false;
            }
        },
        stockIn(index) {
            this.issues[index].received.date = this.selectedDate;
            let beforCount = this.issues[index].jobs.length;
            this.issues[index].jobs.push(this.issues[index].received);
            let afterCount = this.issues[index].jobs.length;
            console.log(beforCount)
            console.log(afterCount)
        },
        balanceQuantity(item) {
            if (item.jobs.length > 0) {
                return item.jobs.reduce((accumulator, job) => accumulator + job.collect - job.loss, 0);
            } else {
                return 0;
            }
        }

    },
    mounted() {
        const now = new Date();
        this.selectedDate = now.toISOString().slice(0, 10);
        this.selectedTime = now.toTimeString().slice(0, 5);
        const defaultValue = 250;
        this.quantities = Array.from({ length: this.manager.colors.length }, () =>
            Array(this.manager.sizes.length).fill(defaultValue)
        );
    },
    created() {
        for (let colorIndex = 0; colorIndex < this.manager.colors.length; colorIndex++) {
            this.quantities[colorIndex] = [];
            for (let sizeIndex = ''; sizeIndex < this.manager.sizes.length; sizeIndex++) {
                this.quantities[colorIndex][sizeIndex] = '';
            }
        }
    },
}
</script>

<style scoped>
table th:nth-child(1),
.table td:nth-child(1) {
    position: sticky;
    left: 0;
    background-color: #f8f8f7;
    color: #373737;
    z-index: 10;
}

table th:nth-child(7),
.table td:nth-child(7) {
    position: sticky;
    right: 0;
    background-color: #f8f8f7;
    color: #373737;
    z-index: 10;
}

.accordion-button:not(.collapsed) {
    color: #fff;
    background-color: none;
}

.accordion {
    --bs-accordion-active-bg: #606C5D !important;
    --bs-accordion-btn-focus-box-shadow: none;
    --bs-accordion-active-color: #ffffff;
    --bs-accordion-btn-icon-width: 1rem;
}

.accordion-item {
    border: none;
}

.nav-link.active {
    color: #fff;
    background-color: #606C5D;
}

.nav-link {
    color: #000000;
}
</style>