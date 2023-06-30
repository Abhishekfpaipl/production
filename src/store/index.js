import { createStore } from "vuex";

export default createStore({
  state: {
    order: [
      {
        id: 1,
        img: 'img/fabric/fab1.png',
        style: '01-20-23188',
        qty: '1000',
        ready:'200',
        order:'100',
        shipped:'100',
        delivered:'100',
        total:'1000',
        bal:'900',
        color:'5',
        size:'3',
        status: 'New Order Posted',
        date:'15/05/23',
        time:'06:30 pm'
      },
      {
        id: 2,
        img: 'img/fabric/fab2.png',
        style: '01-20-23188',
        qty: '1000',
        ready:'600',
        order:'100',
        shipped:'100',
        delivered:'100',
        total:'1000',
        bal:'900',
        color:'5',
        size:'3',
        status: 'Fabricator has Accepted the order',
        date:'15/05/23',
        time:'06:30 pm'
      },
      {
        id: 3,
        img: 'img/fabric/fab3.png',
        style: '01-20-23188',
        qty: '1000',
        ready:'500',
        order:'100',
        shipped:'100',
        delivered:'100',
        total:'1000',
        bal:'900',
        color:'9',
        size:'1',
        status: 'Monaal Creation Accepted Order',
        date:'15/05/23',
        time:'06:30 pm'
      },
      {
        id: 4,
        img: 'img/fabric/fab4.png',
        style: '01-20-23188',
        qty: '1000',
        ready:'300',
        order:'100',
        shipped:'100',
        delivered:'100',
        total:'1000',
        bal:'900',
        color:'5',
        size:'8',
        status: 'Fabric is Available at Monaal',
        date:'15/05/23',
        time:'06:30 pm'
      },
      {
        id: 5,
        img: 'img/fabric/fab5.png',
        style: '01-20-23188',
        qty: '1000',
        ready:'822',
        order:'100',
        shipped:'100',
        delivered:'100',
        total:'1000',
        bal:'900',
        color:'7',
        size:'6',
        status: 'Fabric Arranged For Delivery',
        date:'15/05/23',
        time:'06:30 pm'
      },
      {
        id: 6,
        img: 'img/fabric/fab6.png',
        style: '01-20-23188',
        qty: '1000',
        ready:'500',
        order:'100',
        shipped:'100',
        delivered:'100',
        total:'1000',
        bal:'900',
        color:'8',
        size:'2',
        status: 'Fabric Received',
        date:'15/05/23',
        time:'06:30 pm'
      },
    ],
    activeReadyOrder:{},
    inward: [
      {
        id: 1,
        img: 'img/fabric/fab1.png',
        name: 'Cheese Fabric',
        stock: '10000',
        price: '100',
      },
      {
        id: 2,
        img: 'img/fabric/fab2.png',
        name: 'Crepe Fabric',
        stock: '10000',
        price: '100',
      },
      {
        id: 3,
        img: 'img/fabric/fab3.png',
        name: 'Georgette Fabric',
        stock: '10000',
        price: '150',
      },
      {
        id: 4,
        img: 'img/fabric/fab4.png',
        name: 'Cotton Duck',
        stock: '10000',
        price: '150',
      },
      {
        id: 5,
        img: 'img/fabric/fab5.png',
        name: 'Georgette Fabric',
        stock: '10000',
        price: '150',
      },
      {
        id: 6,
        img: 'img/fabric/fab6.png',
        name: 'Cotton Duck',
        stock: '10000',
        price: '150',
      },
    ],
    cutting: [
      {
        id: 1,
        img: 'img/fabric/fab8.png',
        name: 'Cheese Fabric',
        stock: '10000',
        price: '100',
        status: 'Accept'
      },
      {
        id: 2,
        img: 'img/fabric/fab7.png',
        name: 'Crepe Fabric',
        stock: '10000',
        price: '100',
        status: 'Running'
      },
      {
        id: 3,
        img: 'img/fabric/fab6.png',
        name: 'Georgette Fabric',
        stock: '10000',
        price: '150',
        status: 'Running'
      },
      {
        id: 4,
        img: 'img/fabric/fab5.png',
        name: 'Cotton Duck',
        stock: '10000',
        price: '150',
        status: 'Hold'
      },
      {
        id: 5,
        img: 'img/fabric/fab4.png',
        name: 'Georgette Fabric',
        stock: '10000',
        price: '150',
        status: 'Hold'
      },
      {
        id: 6,
        img: 'img/fabric/fab3.png',
        name: 'Cotton Duck',
        stock: '10000',
        price: '150',
        status: 'Finished'
      },
    ],
    productionOrder: [
      {
        id: 1,
        img: 'img/order/1.jpg',
        style: '23188',
        qty: '1000',
        costing: ''
      },
      {
        id: 2,
        img: 'img/order/2.jpg',
        style: '23188',
        qty: '1000',
        costing: ''
      },
      {
        id: 3,
        img: 'img/order/3.jpg',
        style: '23188',
        qty: '1000',
        costing: ''
      },
      {
        id: 4,
        img: 'img/order/4.jpg',
        style: '23188',
        qty: '1000',
        costing: ''
      },
      {
        id: 5,
        img: 'img/order/5.jpg',
        style: '23188',
        qty: '1000',
        costing: ''
      },
      {
        id: 6,
        img: 'img/order/6.jpg',
        style: '23188',
        qty: '1000',
        costing: ''
      },
    ],
    stiching: [
      {
        id: 1,
        img: 'img/order/12.jpg',
        name: 'Aman Solanki',
        style: '23188',
        qty: '100',
        rate: '30'
      },
      {
        id: 2,
        img: 'img/order/11.jpg',
        name: 'Aman Solanki',
        style: '23188',
        qty: '100',
        rate: '30'
      },
      {
        id: 3,
        img: 'img/order/10.jpg',
        name: 'Aman Solanki',
        style: '23188',
        qty: '100',
        rate: '30'
      },
      {
        id: 4,
        img: 'img/order/9.jpg',
        name: 'Aman Solanki',
        style: '23188',
        qty: '100',
        rate: '30'
      },
      {
        id: 5,
        img: 'img/order/8.jpg',
        name: 'Aman Solanki',
        style: '23188',
        qty: '100',
        rate: '30'
      },
      {
        id: 6,
        img: 'img/order/7.jpg',
        name: 'Aman Solanki',
        style: '23188',
        qty: '100',
        rate: '30'
      },
    ],
    job: [
      {
        id: 1,
        img: 'img/order/8.jpg',
        name: 'Sticker',
        style: '23188',
        qty: '100',
        rate: '40'
      },
      {
        id: 2,
        img: 'img/order/5.jpg',
        name: 'Embroidery',
        style: '23188',
        qty: '100',
        rate: '40'
      },
      {
        id: 3,
        img: 'img/order/6.jpg',
        name: 'Washing',
        style: '23188',
        qty: '100',
        rate: '40'
      },
      {
        id: 4,
        img: 'img/order/9.jpg',
        name: 'Aman Solanki',
        style: '23188',
        qty: '100',
        rate: '40'
      },
      {
        id: 5,
        img: 'img/order/8.jpg',
        name: 'Aman Solanki',
        style: '23188',
        qty: '100',
        rate: '30'
      },
      {
        id: 6,
        img: 'img/order/7.jpg',
        name: 'Aman Solanki',
        style: '23188',
        qty: '100',
        rate: '30'
      },
    ],
    material: [
      {
        id: 1,
        img: 'img/order/9.jpg',
        name: 'Sticker',
        style: '23188',
        qty: '100',
        rate: '40'
      },
      {
        id: 2,
        img: 'img/order/1.jpg',
        name: 'Embroidery',
        style: '23188',
        qty: '100',
        rate: '40'
      },
      {
        id: 3,
        img: 'img/order/3.jpg',
        name: 'Washing',
        style: '23188',
        qty: '100',
        rate: '40'
      },
      {
        id: 4,
        img: 'img/order/4.jpg',
        name: 'Aman Solanki',
        style: '23188',
        qty: '100',
        rate: '40'
      },
      {
        id: 5,
        img: 'img/order/6.jpg',
        name: 'Aman Solanki',
        style: '23188',
        qty: '100',
        rate: '30'
      },
      {
        id: 6,
        img: 'img/order/10.jpg',
        name: 'Aman Solanki',
        style: '23188',
        qty: '100',
        rate: '30'
      },
    ],
    finishOrder: [
      {
        id: 1,
        img: 'img/order/1.jpg',
        style: '23188',
        qty: '1000',
        costing: ''
      },
      {
        id: 2,
        img: 'img/order/2.jpg',
        style: '23188',
        qty: '1000',
        costing: ''
      },
      {
        id: 3,
        img: 'img/order/3.jpg',
        style: '23188',
        qty: '1000',
        costing: ''
      },
      {
        id: 4,
        img: 'img/order/4.jpg',
        style: '23188',
        qty: '1000',
        costing: ''
      },
      {
        id: 5,
        img: 'img/order/5.jpg',
        style: '23188',
        qty: '1000',
        costing: ''
      },
      {
        id: 6,
        img: 'img/order/6.jpg',
        style: '23188',
        qty: '1000',
        costing: ''
      },
    ],
    threading: [
      {
        id: 1,
        img: 'img/order/12.jpg',
        name: 'Aman Solanki',
        style: '23188',
        qty: '100',
        rate: '30'
      },
      {
        id: 2,
        img: 'img/order/11.jpg',
        name: 'Aman Solanki',
        style: '23188',
        qty: '100',
        rate: '30'
      },
      {
        id: 3,
        img: 'img/order/10.jpg',
        name: 'Aman Solanki',
        style: '23188',
        qty: '100',
        rate: '30'
      },
      {
        id: 4,
        img: 'img/order/9.jpg',
        name: 'Aman Solanki',
        style: '23188',
        qty: '100',
        rate: '30'
      },
      {
        id: 5,
        img: 'img/order/8.jpg',
        name: 'Aman Solanki',
        style: '23188',
        qty: '100',
        rate: '30'
      },
      {
        id: 6,
        img: 'img/order/7.jpg',
        name: 'Aman Solanki',
        style: '23188',
        qty: '100',
        rate: '30'
      },
    ],

  },
  getters: {
    getOrder(state){
      return state.order
    },
    getActiveReadyOrder(state){
      return state.activeReadyOrder
    },
    getInward(state) {
      return state.inward
    },
    getCutting(state) {
      return state.cutting
    },
    getProductionOrder(state) {
      return state.productionOrder
    },
    getStiching(state) {
      return state.stiching
    },
    getJob(state) {
      return state.job
    },
    getMaterial(state) {
      return state.material
    },
    getFinishOrder(state) {
      return state.finishOrder
    },
    getThreading(state) {
      return state.threading
    }

  },
  mutations: {
    selectReadyOrder(state, order){
      state.activeReadyOrder = order
    },
    hideReadyOrder(state){
      state.activeReadyOrder = {}
    }
  },
  actions: {
    selectReadyOrder({commit},order){
      commit('selectReadyOrder', order)
    },
    hideReadyOrder({commit}){
      commit('hideReadyOrder')
    }
  },
  modules: {},
});