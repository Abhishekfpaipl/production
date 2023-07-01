import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: []
  },      
  {
    path: "/sign-up",
    name: "SignupForm",
    component:() => import('@/views/Forms/SignupForm.vue'),
  },
  {
    path: "/login",
    name: "LoginForm",
    component:() => import('@/views/Forms/LoginForm.vue'),
  },

  {
    path:'/order',
    children:[
      {
        path:'new',
        name:'Order-New',
        component:() => import('@/components/orders/NewPage.vue')
      },
      {
        path:'ready',
        name:'Order-Ready',
        component:() => import('@/components/orders/ReadyPage.vue')
      },
      {
        path:'order',
        name:'Order-Order',
        component:() => import('@/components/orders/OrderPage.vue')
      },
      {
        path:'shipped',
        name:'Order-Shipped',
        component:() => import('@/components/orders/ShippedPage.vue')
      },
      {
        path:'delivered',
        name:'Order-Delivered',
        component:() => import('@/components/orders/DeliveredPage.vue')
      },
    ]
  },
  {
    path: '/store',
    children: [
      {
        path: 'inward',
        name: 'Store-Inward',
        component: () => import('@/components/store/InwardPage.vue'),
      },
      {
        path: 'store',
        name: 'Store-Store',
        component: () => import('@/components/store/StorePage.vue'),
      },
      {
        path: 'cutting',
        name: 'Store-Cutting',
        component: () => import('@/components/store/CuttingPage.vue')
      },
    ]
  },

  {
    path:'/cutting',
    children:[
      {
        path:'order',
        name:'Cutting-Order',
        component:() => import('@/components/cutting/OrderPage.vue')
      },
      {
        path:'cutting',
        name:'Cutting-Cutting',
        component:() => import('@/components/cutting/CuttingPage.vue')
      },
      {
        path:'production',
        name:'Cutting-Production',
        component:() => import('@/components/cutting/ProductionPage.vue')
      },
    ]
  },

  {
    path:'/production',
    children:[
      {
        path:'order',
        name:'Production-Order',
        component:() => import('@/components/production/OrderPage.vue')
      },
      {
        path:'stiching',
        name:'Production-Stiching',
        children:[
          {
            path:'single',
            name:'Production-Stiching-Single',
            component:() => import('@/components/production/SingleNeedle.vue')
          },
          {
            path:'overlock',
            name:'Production-Stiching-Overlock',
            component:() => import('@/components/production/OverLock.vue') 
          },
          {
            path:'wastage',
            name:'Production-Stiching-Wastage',
            component:() => import('@/components/production/WasTage.vue') 
          },
        ]
      },
      {
        path:'/production/job',
        name:'Production-Job',
        children:[
          {
            path:'threading',
            name:'Production-Job-Threading',
            component:() => import('@/components/production/ThreadingPage.vue')
          },
          {
            path:'dori',
            name:'Production-Job-Dori',
            component:() => import('@/components/production/DoriPage.vue')
          },
          {
            path:'button',
            name:'Production-Job-Button',
            component:() => import('@/components/production/ButtonPage.vue')
          },
        ]
      },
      {
        path:'/production/material',
        name:'Production-Material',
        children:[
          {
            path:'one',
            name:'Production-Material-One',
            component:() => import('@/components/production/MaterialOne.vue')
          },
          {
            path:'two',
            name:'Production-Material-Two',
            component:() => import('@/components/production/MaterialTwo.vue')
          },
          {
            path:'three',
            name:'Production-Material-Three',
            component:() => import('@/components/production/MaterialThree.vue')
          },
        ]
      },
      {
        path:'/production/overheads',
        name:'Production-Overheads',
        component:() => import('@/components/production/OverHead.vue')
      },
      {
        path:'/production/finishing',
        name:'Production-Finishing',
        component:() => import('@/components/production/FinishingPage.vue')
      },
    ]
  },

  {
    path:'/finishing',
    children:[
      {
        path:'order',
        name:'Finishing-Order',
        component:() => import('@/components/finishing/OrderPage.vue')
      },
      {
        path:'/finishing/finishing',
        name:'Finishing-Finishing',
        children:[
          {
            path:'threading',
            name:'Finishing-Finishing-Threading',
            component:() => import('@/components/finishing/ThreadingPage.vue')
          },
          {
            path:'dori',
            name:'Finishing-Finishing-Dori',
            component:() => import('@/components/finishing/DoriPage.vue') 
          },
          {
            path:'button',
            name:'Finishing-Finishing-Button',
            component:() => import('@/components/finishing/ButtonPage.vue') 
          },
        ]
      },
    ]
  }



];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
