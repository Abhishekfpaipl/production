import { createStore } from "vuex";

export default createStore({
  state: {
    orders: [
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
    productions: [
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
    finishings: [
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
    cuttings: [
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
    subfabs: [
      {
        id: 1,
        img: 'img/order/1.jpg',
        style: '23188',
        qty: '1000',
        costing: '1500',
        status: 'Accept',
        date: '15/05/23',
        assign: 'Assignee',
        btn: ' btn-outline-success ',
        time: '5:30 pm' ,
        sizes: [
          {
            name: 'S',
          },
          {
            name: 'M',
          },
          {
            name: 'L',
          },
          {
            name: 'XL',
          },
        ],
        colors: [
          {
            bg: 'black',
          },
          {
            bg: 'red',
          },
          {
            bg: 'green',
          },
          {
            bg: 'blue',
          },
        ],
      },
      {
        id: 2,
        img: 'img/order/2.jpg',
        style: '23188',
        qty: '1000',
        costing: '1500',
        status: 'Accept',
        date: '15/05/23',
        assign: 'In-Production',
        btn: ' btn-outline-info ',
        time: '5:30 pm' ,
        sizes: [
          {
            name: 'S',
          },
          {
            name: 'M',
          },
          {
            name: 'L',
          },
          {
            name: 'XL',
          },
        ],
        colors: [
          {
            bg: 'black',
          },
          {
            bg: 'red',
          },
          {
            bg: 'green',
          },
          {
            bg: 'blue',
          },
        ],  
      },
      
    ],
    users: [
      {
        id: 1,
        name: 'Mohan',
        role: 'Creator',
        rate: 50,
        dept: 'Fabricator',
        post: 'Manager',
        imgu: "img/members/jyoti.jpg"
      },
      {
        id: 2,
        name: 'Suresh',
        role: 'Admin',
        rate: 60,
        dept: 'Product Designer',
        post: 'Manager',
        imgu: "img/members/Kedar.jpg"
      },
      {
        id: 3,
        name: 'Ramesh',
        role: 'Admin',
        rate: 70,
        dept: 'Fabricator',
        post: 'Manager',
        imgu: "img/members/Modern.jpg"
      },
      {
        id: 4,
        name: 'Dharmesh',
        role: 'Assignee',
        rate: 80,
        dept: 'Product Designer',
        post: 'Manager',
        imgu: "img/members/Narender.jpg"
      },
      {
        id: 4,
        name: 'Naresh',
        role: 'Manager',
        rate: 70,
        dept: 'Fabricator',
        post: 'Manager',
        imgu: "img/members/jyoti.jpg"
      },
      {
        id: 4,
        name: 'Parkash',
        role: 'Assignee',
        rate: 60,
        dept: 'Fabricator',
        post: 'Manager',
        imgu: "img/members/Kedar.jpg"
      },
      {
        id: 5,
        name: 'Hari',
        role: 'Assignee',
        rate: 50,
        dept: 'Fabricator',
        post: 'Manager',
        imgu: "img/members/jyoti.jpg"
      },
      {
        id: 6,
        name: 'Shankar',
        role: 'Assignee',
        rate: 80,
        dept: 'Fabricator',
        post: 'Manager',
        imgu: "img/members/jyoti.jpg"
      },
      {
        id: 7,
        name: 'Parshad',
        role: 'Assignee',
        rate: 90,
        dept: 'Fabricator',
        post: 'Manager',
        imgu: "img/members/jyoti.jpg"
      },
      {
        id: 8,
        name: 'Dharmender',
        role: 'Assignee',
        rate: 90,
        dept: 'Fabricator',
        post: 'Manager',
        imgu: "img/members/jyoti.jpg"
      },
      {
        id: 9,
        name: 'Rahul',
        role: 'Assignee',
        rate: 50,
        dept: 'Fabricator',
        post: 'Manager',
        imgu: "img/members/jyoti.jpg"
      },
    ],
    activeUser: {},
    managers: [
      {
        id: 1,
        img: 'img/order/9.jpg',
        name: 'Sticker',
        style: '23188',
        qty: '1000',
        costing: '1500',
        status: 'Accept',
        date: '15/05/23',
        assign: 'Assign',
        btn: ' btn-outline-success ',
        sp: '200',
        panna: '63 inc | 1.6002 Mtr',
        fc: '230 Grm',
        stag: '23550, Tshirt, Chuwingum, Fab 30, Sakshi, Jr',
        time: '06:30 pm',
        bal: '900',
        sizes: [
          {
            name: 'S',
          },
          {
            name: 'M',
          },
          {
            name: 'L',
          },
          {
            name: 'XL',
          },
        ],
        colors: [
          {
            bg: 'black',
          },
          {
            bg: 'red',
          },
          {
            bg: 'green',
          },
          {
            bg: 'blue',
          },
        ],

      },
      {
        id: 2,
        img: 'img/order/9.jpg',
        name: 'Sticker',
        style: '23189',
        qty: '2000',
        costing: '1700',
        status: 'Accept',
        date: '18/05/23',
        assign: 'Assign',
        btn: ' btn-outline-success ',
        sp: '500',
        panna: '63 inc | 1.6002 Mtr',
        fc: '230 Grm',
        stag: '23550, Tshirt, Chuwingum, Fab 30, Sakshi, Jr',
        time: '06:30 pm',
        bal: '900',
        sizes: [
          {
            name: 'S',
          },
          {
            name: 'M',
          },
          {
            name: 'L',
          },
          {
            name: 'XL',
          },
        ],
        colors: [
          {
            bg: 'black',
          },
          {
            bg: 'red',
          },
          {
            bg: 'green',
          },
          {
            bg: 'blue',
          },
        ],

      },
     
       
    ],
    tstatus: [
      {
        img: 'http://dillisix.com/storage/55/Amit.jpeg',
        bal: 5000,
        ready: 500,
        send: 400,
        disp: 300,
        rec: 300,
      },
      {
        img: 'http://dillisix.com/storage/55/Amit.jpeg',
        bal: 4700,
        ready: 500,
        send: 400,
        disp: 300,
        rec: 300,
      },
      {
        img: 'http://dillisix.com/storage/55/Amit.jpeg',
        bal: 4400,
        ready: 1000,
        send: 600,
        disp: 600,
        rec: 600,
      },
      {
        img: 'http://dillisix.com/storage/55/Amit.jpeg',
        bal: 3800,
        ready: 800,
        send: 800,
        disp: 800,
        rec: 800,
      },
      {
        img: 'http://dillisix.com/storage/55/Amit.jpeg',
        bal: 3000,
        ready: 2000,
        send: 1500,
        disp: 1500,
        rec: 1500,
      },
      {
        img: 'http://dillisix.com/storage/55/Amit.jpeg',
        bal: 500,
        ready: 1500,
        send: 1500,
        disp: 1500,
        rec: 1500,
      },
    ],
    items: [
      {
        img: 'http://dillisix.com/storage/83/IMG20230404151417.jpg',
        oid: 'A1',
        id: '01',
        issue: '9000',
        issueDate: '09 jul',
        due: '3000',
        dueDate: '12 jul',
        recv: '2900',
        recvDate: '12/07',
        loss: '100',
        lossDate: '12/07',
        bal: '6000',
        balDate: '12/07',
        received: {
          collect: null,
          loss: null,
          date: null,
        },
        jobs: []
      },
      {
        img: 'http://dillisix.com/storage/83/IMG20230404151417.jpg',
        oid: 'A1',
        id: '02',
        issue: '9000',
        issueDate: '09/07',
        due: '3000',
        dueDate: '12/07',
        recv: '2900',
        recvDate: '12/07',
        loss: '100',
        lossDate: '12/07',
        bal: '6000',
        balDate: '12/07',
        received: {
          collect: null,
          loss: null,
        },
        jobs: [
          {
            collect: null,
            loss: null,
          }
        ]
      },
      // {
      //   img: 'http://dillisix.com/storage/54/kedar.jpg',
      //   oid: 'B1',
      //   id: '01',
      //   issue: '9000',
      //   issueDate: '09/07',
      //   due: '3000',
      //   dueDate: '12/07',
      //   recv: '2900',
      //   recvDate: '12/07',
      //   loss: '100',
      //   lossDate: '12/07',
      //   bal: '6000',
      //   balDate: '12/07'
      // },
      // {
      //   img: 'http://dillisix.com/storage/54/kedar.jpg',
      //   oid: 'B1',
      //   id: '02',
      //   issue: '9000',
      //   issueDate: '09/07',
      //   due: '3000',
      //   dueDate: '12/07',
      //   recv: '2900',
      //   recvDate: '12/07',
      //   loss: '100',
      //   lossDate: '12/07',
      //   bal: '6000',
      //   balDate: '12/07'
      // },
      // {
      //   img: 'http://dillisix.com/storage/53/narender-profile-image.jpeg',
      //   oid: 'C1',
      //   id: '01',
      //   issue: '9000',
      //   issueDate: '09/07',
      //   due: '3000',
      //   dueDate: '12/07',
      //   recv: '2900',
      //   recvDate: '12/07',
      //   loss: '100',
      //   lossDate: '12/07',
      //   bal: '6000',
      //   balDate: '12/07'
      // },
      // {
      //   img: 'http://dillisix.com/storage/53/narender-profile-image.jpeg',
      //   oid: 'C1',
      //   id: '02',
      //   issue: '9000',
      //   issueDate: '09/07',
      //   due: '3000',
      //   dueDate: '12/07',
      //   recv: '2900',
      //   recvDate: '12/07',
      //   loss: '100',
      //   lossDate: '12/07',
      //   bal: '6000',
      //   balDate: '12/07'
      // },

    ],
    issues: [
      {
        id: '01',
        img: 'http://dillisix.com/storage/83/IMG20230404151417.jpg',
        qty: '9000',
        start_date: '2023-07-19',
        due_date: '2023-07-21',
        end_date: null,
        received: {
          collect: null,
          loss: null,
          date: null,
        },
        jobs: [],
      },
      {
        id: '02',
        img: 'http://dillisix.com/storage/54/kedar.jpg',
        qty: '5000',
        start_date: '2023-07-21',
        due_date: '2023-07-24',
        end_date: null,
        received: {
          collect: null,
          loss: null,
          date: null,
        },
        jobs: [],
      }
    ],
    issuess: [
      {
        id: '01',
        img: 'http://dillisix.com/storage/83/IMG20230404151417.jpg',
        qty: '9000',
        start_date: '2023-07-19',
        due_date: '2023-07-21',
        end_date: null,
        received: {
          collect: null,
          loss: null,
          date: null,
        },
        jobs: [],
      },
       
    ],
    activeItem: {}
  },
  getters: {
    getOrder(state) {
      return state.order
    },
    getIssues(state) {
      return state.issues
    },
    getIssuess(state) {
      return state.issuess
    },
    getItems(state) {
      return state.items
    },
    getUsers(state) {
      return state.users
    },
    getActiveUser(state) {
      return state.activeUser
    },
    getManagers(state) {
      return state.managers
    },
    getManager: (state) => (managerId) => {
      let index = state.managers.findIndex(manager => manager.id == managerId);
      return state.managers[index];
    },
    getStatus(state) {
      return state.tstatus
    },
    getProductions(state) {
      return state.productions
    },
    getProduction: (state) => (productionId) => {
      let index = state.productions.findIndex(production => production.id == productionId);
      return state.productions[index];
    },
    getFinishings(state) {
      return state.finishings
    },
    getFinishing: (state) => (finishingId) => {
      let index = state.finishings.findIndex(finishing => finishing.id == finishingId);
      return state.finishings[index];
    },
    getCuttings(state) {
      return state.cuttings
    },
    getCutting: (state) => (cuttingId) => {
      let index = state.cuttings.findIndex(cutting => cutting.id == cuttingId);
      return state.cuttings[index];
    },
    getSubfabs(state) {
      return state.subfabs
    },
    getSubfab: (state) => (subfabId) => {
      let index = state.cuttings.findIndex(subfab => subfab.id == subfabId);
      return state.subfabs[index];
    },
    getActiveItem(state) {
      return state.activeItem
    },


  },
  mutations: {
    stockIn(state, data) {
      let index = state.issues.findIndex(issue => issue.id === data.issue.id);
      state.issues[index].jobs.push(data.qty);
    },
    stockInn(state, data) {
      let index = state.issuess.findIndex(issues => issues.id === data.issues.id);
      state.issuess[index].jobs.push(data.qty);
    },
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
    },
    selectManager(state, manager) {
      state.activeManager = manager;
    },
    hideManager(state) {
      state.activeManager = {};
    },
    selectItem(state, item) {
      state.activeItem = item;
    },
    hideItem(state) {
      state.activeItem = {};
    }
  },
  actions: {
    stockIn({ commit }, data) {
      commit('stockIn', data)
    },
    stockInn({ commit }, data) {
      commit('stockInn', data)
    },
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
    },
    selectManager({ commit }, manager) {
      commit('selectManager', manager)
    },
    hideManager({ commit }) {
      commit('hideManager')
    },
    selectItem({ commit }, item) {
      commit('selectItem', item)
    },
    hideItem({ commit }) {
      commit('hideItem')
    }
  },
  modules: {},
});
