import { createStore } from "vuex";

export default createStore({
  state: {
    order: [
      {
        id: 1,
        img: 'img/catalog/img1.jpg',
        style: '01-20-23188',
        qty: '1000',
        ready: '200',
        order: '100',
        shipped: '100',
        delivered: '100',
        total: '1000',
        bal: '900',
        color: '5',
        size: '3',
        status: 'New Order Posted',
        date: '15/05/23',
        time: '06:30 pm',
        name: 'T-Shirt',
        sp: '200',
        panna: '63 inc | 1.6002 Mtr',
        fc: '230 Grm',
        stag: '23550, Tshirt, Chuwingum, Fab 30, Sakshi, Jr',

      },
      {
        id: 2,
        img: 'img/catalog/img2.jpg',
        style: '01-20-23188',
        qty: '1000',
        ready: '600',
        order: '100',
        shipped: '100',
        delivered: '100',
        total: '1000',
        bal: '900',
        color: '5',
        size: '3',
        status: 'Fabricator has Accepted the order',
        date: '15/05/23',
        time: '06:30 pm',

      },
      {
        id: 3,
        img: 'img/catalog/img3.jpg',
        style: '01-20-23188',
        qty: '1000',
        ready: '500',
        order: '100',
        shipped: '100',
        delivered: '100',
        total: '1000',
        bal: '900',
        color: '9',
        size: '1',
        status: 'Monaal Creation Accepted Order',
        date: '15/05/23',
        time: '06:30 pm',

      },
      {
        id: 4,
        img: 'img/catalog/img4.jpg',
        style: '01-20-23188',
        qty: '1000',
        ready: '300',
        order: '100',
        shipped: '100',
        delivered: '100',
        total: '1000',
        bal: '900',
        color: '5',
        size: '8',
        status: 'Fabric is Available at Monaal',
        date: '15/05/23',
        time: '06:30 pm',

      },
      {
        id: 5,
        img: 'img/catalog/img5.jpg',
        style: '01-20-23188',
        qty: '1000',
        ready: '822',
        order: '100',
        shipped: '100',
        delivered: '100',
        total: '1000',
        bal: '900',
        color: '7',
        size: '6',
        status: 'Fabric Arranged For Delivery',
        date: '15/05/23',
        time: '06:30 pm',

      },
      {
        id: 6,
        img: 'img/catalog/img6.jpg',
        style: '01-20-23188',
        qty: '1000',
        ready: '500',
        order: '100',
        shipped: '100',
        delivered: '100',
        total: '1000',
        bal: '900',
        color: '8',
        size: '2',
        status: 'Fabric Received',
        date: '15/05/23',
        time: '06:30 pm',

      },
    ],
    activeReadyOrder: {},
    cutting: [
      {
        id: 1,
        img: 'img/fabric/fab8.png',
        name: 'Cheese Fabric',
        stock: '10000',
        price: '100',
        colors: [
          { id: 1, name: 'black', img: "img/fabric/fab1.png" },
          { id: 2, name: 'red', img: "img/fabric/fab2.png" },
          { id: 2, name: 'white', img: "img/fabric/fab3.png" },
          { id: 2, name: 'green', img: "img/fabric/fab4.png" },
          { id: 2, name: 'purple', img: "img/fabric/fab5.png" },
        ],
        sizes: [
          { id: 1, name: 'S' },
          { id: 2, name: 'M' },
          { id: 3, name: 'L' },
          { id: 4, name: 'F' },
          { id: 5, name: 'XL' },
        ],
        status: 'Accept'
      },
      {
        id: 2,
        img: 'img/fabric/fab7.png',
        name: 'Crepe Fabric',
        stock: '10000',
        price: '100',
        status: 'Accept'
      },
      {
        id: 3,
        img: 'img/fabric/fab6.png',
        name: 'Georgette Fabric',
        stock: '10000',
        price: '150',
        status: 'Accept'
      },
      {
        id: 4,
        img: 'img/fabric/fab5.png',
        name: 'Cotton Duck',
        stock: '10000',
        price: '150',
        status: 'Accept'
      },
      {
        id: 5,
        img: 'img/fabric/fab4.png',
        name: 'Georgette Fabric',
        stock: '10000',
        price: '150',
        status: 'Accept'
      },
      {
        id: 6,
        img: 'img/fabric/fab3.png',
        name: 'Cotton Duck',
        stock: '10000',
        price: '150',
        status: 'Accept'
      },
    ],
    activeCuttingOrder: {},
    productionOrder: [
      {
        id: 1,
        img: 'img/order/1.jpg',
        style: '23188',
        qty: '1000',
        costing: '',
        status: 'Accept',
        date: '15/05/23',
        assign: 'Assignee',
        btn: ' btn-outline-success '
      },
      {
        id: 2,
        img: 'img/order/2.jpg',
        style: '23188',
        qty: '1000',
        costing: '',
        status: 'Accept',
        date: '15/05/23',
        assign: 'In-Production',
        btn: ' btn-outline-info '
      },
      {
        id: 3,
        img: 'img/order/3.jpg',
        style: '23188',
        qty: '1000',
        costing: '',
        status: 'Accept',
        date: '15/05/23',
        assign: 'In-Fabrication',
        btn: ' btn-outline-warning '
      },
      {
        id: 4,
        img: 'img/order/4.jpg',
        style: '23188',
        qty: '1000',
        costing: '',
        status: 'Accept',
        date: '15/05/23',
        assign: 'Assignee',
        btn: ' btn-outline-success '
      },
      {
        id: 5,
        img: 'img/order/5.jpg',
        style: '23188',
        qty: '1000',
        costing: '',
        status: 'Accept',
        date: '15/05/23',
        assign: 'Assignee',
        btn: ' btn-outline-success '
      },
      {
        id: 6,
        img: 'img/order/6.jpg',
        style: '23188',
        qty: '1000',
        costing: '',
        status: 'Accept',
        date: '15/05/23',
        assign: 'Assignee',
        btn: ' btn-outline-success '
      },
    ],
    users: [
      {
        id: 1,
        name: 'Kedar',
        role: 'Creator',
        status: 'Access Granted',
        dept: 'Fabricator',
        post: 'Manager',
        imgu: "img/members/jyoti.jpg"
      },
      {
        id: 2,
        name: 'Amit Sardar',
        role: 'Admin',
        status: 'Access Granted',
        dept: 'Product Designer',
        post: 'Manager',
        imgu: "img/members/Kedar.jpg"
      },
      {
        id: 3,
        name: 'Dheeraj Sardar',
        role: 'Admin',
        status: 'Access Granted',
        dept: 'Fabricator',
        post: 'Manager',
        imgu: "img/members/Modern.jpg"
      },
      {
        id: 4,
        name: 'jyoti Garments',
        role: 'Assignee',
        status: 'Access Granted',
        dept: 'Product Designer',
        post: 'Manager',
        imgu: "img/members/Narender.jpg"
      },
      {
        id: 4,
        name: 'Narender',
        role: 'Manager',
        status: 'Access Granted',
        dept: 'Fabricator',
        post: 'Manager',
        imgu: "img/members/jyoti.jpg"
      },
      {
        id: 4,
        name: 'Modern Collection',
        role: 'Assignee',
        status: 'Access Granted',
        dept: 'Fabricator',
        post: 'Manager',
        imgu: "img/members/Kedar.jpg"
      },
      {
        id: 5,
        name: 'Adnan Siddiqui',
        role: 'Assignee',
        status: 'Access Granted',
        dept: 'Fabricator',
        post: 'Manager',
        imgu: "img/members/jyoti.jpg"
      },
      {
        id: 6,
        name: 'Hari Shankar',
        role: 'Assignee',
        status: 'Access Granted',
        dept: 'Fabricator',
        post: 'Manager',
        imgu: "img/members/jyoti.jpg"
      },
      {
        id: 7,
        name: 'Hari Shankar',
        role: 'Assignee',
        status: 'Access Granted',
        dept: 'Fabricator',
        post: 'Manager',
        imgu: "img/members/jyoti.jpg"
      },
      {
        id: 8,
        name: 'Hari Shankar',
        role: 'Assignee',
        status: 'Access Granted',
        dept: 'Fabricator',
        post: 'Manager',
        imgu: "img/members/jyoti.jpg"
      },
      {
        id: 9,
        name: 'Hari Shankar',
        role: 'Assignee',
        status: 'Access Granted',
        dept: 'Fabricator',
        post: 'Manager',
        imgu: "img/members/jyoti.jpg"
      },
    ],
    manager: [
      {
        id: 1,
        img: 'img/order/9.jpg',
        name:'Sticker',
        style: '23188',
        qty: '1000',
        costing: '',
        status: 'Accept',
        date: '15/05/23',
        assign: 'Assign',
        btn: ' btn-outline-success '
      },
      {
        id: 2,
        img: 'img/order/5.jpg',
        name:'Embroidery',
        style: '23188',
        qty: '1000',
        costing: '',
        status: 'Accept',
        date: '15/05/23',
        assign: 'Assign',
        btn: ' btn-outline-success '
      },
      {
        id: 3,
        img: 'img/order/3.jpg',
        name:'Washing',
        style: '23188',
        qty: '1000',
        costing: '',
        status: 'Accept',
        date: '15/05/23',
        assign: 'Assign',
        btn: ' btn-outline-success '
      },
      {
        id: 4,
        img: 'img/order/4.jpg',
        name:'Aman Solanki',
        style: '23188',
        qty: '1000',
        costing: '',
        status: 'Accept',
        date: '15/05/23',
        assign: 'Assign',
        btn: ' btn-outline-success '
      },
      {
        id: 5,
        img: 'img/order/5.jpg',
        name:'Aman Solanki',
        style: '23188',
        qty: '1000',
        costing: '',
        status: 'Accept',
        date: '15/05/23',
        assign: 'Assign',
        btn: ' btn-outline-success '
      },
      {
        id: 6,
        img: 'img/order/6.jpg',
        name:'Aman Solanki',
        style: '23188',
        qty: '1000',
        costing: '',
        status: 'Accept',
        date: '15/05/23',
        assign: 'Assign',
        btn: ' btn-outline-success '
      },
    ],

  },
  getters: {
    getOrder(state) {
      return state.order
    },
    getActiveReadyOrder(state) {
      return state.activeReadyOrder
    },
    getCutting(state) {
      return state.cutting
    },
    getActiveCuttingOrder(state) {
      return state.activeCuttingOrder
    },
    getProductionOrder(state) {
      return state.productionOrder
    },
    getUsers(state) {
      return state.users
    },
    getManager(state) {
      return state.manager
    }

  },
  mutations: {
    selectReadyOrder(state, order) {
      state.activeReadyOrder = order;
    },
    hideReadyOrder(state) {
      state.activeReadyOrder = {};
    },
    selectCuttingOrder(state, cutting) {
      state.activeCuttingOrder = cutting;
    },
    hideCuttingOrder(state) {
      state.activeCuttingOrder = {};
    }
  },
  actions: {
    selectReadyOrder({ commit }, order) {
      commit('selectReadyOrder', order)
    },
    hideReadyOrder({ commit }) {
      commit('hideReadyOrder')
    },
    selectCuttingOrder({ commit }, cutting) {
      commit('selectCuttingOrder', cutting)
    },
    hideCuttingOrder({ commit }) {
      commit('hideCuttingOrder')
    }
  },
  modules: {},
});
