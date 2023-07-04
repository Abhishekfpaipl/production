<template>
    <CuttingLinks active="Cutting"></CuttingLinks>
    <div class="mt-2">
        <div v-for="(cutting, index) in cuttings" :key="index" @click="showOrder(cutting)"
            class="d-flex justify-content-between align-items-center border-bottom p-2">
            <div class="d-flex align-items-center">
                <img :src="`${publicPath}${cutting.img}`" class="rounded-circle"
                    style="height:60px;width:60px; object-fit: fill;">
                <div class="ms-3">
                    <p class="m-0">{{ cutting.name }}</p>
                    <p class="m-0">{{ cutting.stock }} mtr</p>
                </div>
            </div>



        </div>

        <div v-if="Object.keys(activeOrder).length !== 0" class="">
            <div class="offcanvas offcanvas-end show" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
                aria-labelledby="staticBackdropLabel">
                <div class="offcanvas-header border d-flex"
                    style="height: 63px !important;box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;">
                    <img :src="`${publicPath}${activeOrder.img}`" class="rounded-circle"
                        style="height:40px;width:40px; object-fit: fill;">
                    <p class="m-0">{{ activeOrder.stock }} mtr</p>
                    <!-- <div class="d-flex flex-column">
                        <b class="m-0">#{{ activeOrder.style }} | <span>Bal : {{ activeOrder.ready }}</span></b>
                        <p class="m-0 text-success">{{ activeOrder.date }} | <span>{{ activeOrder.time }}</span></p>
                    </div> -->
                    <button type="button" class="btn" @click="hideOrder()"><i class="bi bi-x fs-4"></i></button>
                </div>
                <div class="offcanvas-body pt-0">

                    <div class="accordion mt-4" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Cutting
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body p-0">
                                    <div class="border">
                                        <div class="table-responsive mt-4" id="scroll">
                                            <table class="table border border-1">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Qty</th>
                                                        <th scope="col" v-for="(size, index) in activeOrder.sizes"
                                                            :key="index">
                                                            <div class="fw-bold d-flex flex-column align-items-center"
                                                                style="">
                                                                <p class="m-0">{{ size.name }}</p>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(color, colorindex) in activeOrder.colors" :key="colorindex">
                                                        <td class="">
                                                            <div
                                                                class="rounded-circle align-items-center justify-content-center d-flex">
                                                                <img class="rounded-circle"
                                                                    :src="`${publicPath}${color.img}`"
                                                                    style="width: 38px; height: 38px;object-fit: fill;">
                                                            </div>
                                                        </td>

                                                        <td v-for="(size, sizeindex) in activeOrder.sizes" :key="sizeindex">
                                                            <div>
                                                                <form class="form-floating">
                                                                    <input type="number" class="form-control" id="floating"
                                                                        style="width: 55px;height:30px;font-size: 13px !important;">
                                                                    <label for="floating" class="p-0 pt-2">10</label>
                                                                </form>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <div class="card rounded-0 text-center p-3">Submit
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item mt-5 border-top">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Cutting 2
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse show"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body p-0">
                                    <div class="border">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th class="text-center">Colors (5)</th>
                                                    <th class="text-center">Layers (1)</th>
                                                    <th class="text-center">Cutting (5)</th>
                                                    <th class="text-center">Parts (15)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(value, index) in layersInputs" :key="index">
                                                    <td>
                                                        <div class="d-flex">
                                                            <div v-show="colorindex === 0" class="m-2"
                                                                v-for="(color, colorindex) in activeOrder.colors"
                                                                :key="colorindex">
                                                                <div
                                                                    class="rounded-circle align-items-center justify-content-center d-flex">
                                                                    <img class="rounded-circle"
                                                                        :src="`${publicPath}${color.img}`"
                                                                        style="width: 38px; height: 38px; object-fit: fill;">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <form class="m-2">
                                                            <input type="number" class="form-control"
                                                                v-model="layersInputs[index]"
                                                                @change="updateCuttingAndPartsInputs(index)"
                                                                style="width: 55px;">
                                                        </form>
                                                    </td>
                                                    <td>
                                                        <form class="m-2">
                                                            <input type="number" class="form-control"
                                                                :value="cuttingInputs[index]" style="width: 55px;">
                                                        </form>
                                                    </td>
                                                    <td>
                                                        <form class="m-2">
                                                            <input type="number" class="form-control"
                                                                :value="partsInputs[index]" style="width: 55px;">
                                                        </form>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>



                    </div>




                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CuttingLinks from './CuttingLinks.vue';
export default {
    name: "CuttingPage",
    data() {
        return {
            publicPath: process.env.BASE_URL,
            layersInputs: ["", "", "", "", ""],
            cuttingInputs: ['', '', '', '', ''],
            partsInputs: ['', '', '', '', '']
        };
    },
    computed: {
        cuttings() {
            return this.$store.getters.getCutting;
        },
        activeOrder() {
            return this.$store.getters.getActiveCuttingOrder;
        }
    },
    components: { CuttingLinks },
    methods: {
        showOrder(cutting) {
            return this.$store.dispatch('selectCuttingOrder', cutting)
        },
        hideOrder() {
            return this.$store.dispatch('hideCuttingOrder')
        },
        updateCuttingAndPartsInputs(index) {
            const cuttingMultiplier = 5;
            const partsMultiplier = 15;

            const layersValue = this.layersInputs[index];
            this.cuttingInputs[index] = layersValue * cuttingMultiplier;
            this.partsInputs[index] = layersValue * partsMultiplier;
        },
    }
}
</script>

<style  scoped>
#scroll::-webkit-scrollbar {
    background-color: none;
    display: none;
}


table th:first-child,
.table td:first-child {
    position: sticky;
    left: 0;
    background-color: #e8e8e8;
    color: #373737;
    z-index: 10;
}
</style>