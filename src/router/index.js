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
    component: () => import('@/views/Forms/SignupForm.vue'),
  },
  {
    path: "/login",
    name: "LoginForm",
    component: () => import('@/views/Forms/LoginForm.vue'),
  },
  {
    path: "/users",
    name: "User",
    children:[
      {
        path:'members',
        name:'User-Member',
        component: () => import('@/components/user/MembersPage.vue'),
      },
      {
        path:'create',
        name:'User-Create',
        component: () => import('@/components/user/CreateNew.vue'),
      },
    ]
  },
  // {
  //   path: "/users",
  //   name: "User",
  //   component: () => import('@/components/user/MembersPage.vue'),
  // },
  {
    path: "/create-member",
    name: "CreateMember",
    component: () => import('@/components/user/CreateMember.vue'),
  },

  {
    path: '/order',
    children: [
      {
        path: 'new',
        name: 'Order-New',
        component: () => import('@/components/orders/NewPage.vue')
      },
      {
        path: 'ready',
        name: 'Order-Ready',
        component: () => import('@/components/orders/ReadyPage.vue')
      },
      {
        path: 'order',
        name: 'Order-Order',
        component: () => import('@/components/orders/OrderPage.vue')
      },
      {
        path: 'shipped',
        name: 'Order-Shipped',
        component: () => import('@/components/orders/ShippedPage.vue')
      },
      {
        path: 'delivered',
        name: 'Order-Delivered',
        component: () => import('@/components/orders/DeliveredPage.vue')
      },
    ]
  },

  {
    path: '/cutting',
    name: ' Cutting',
    component: () => import('@/components/cutting/CuttingPage.vue')
  },

  {
    path: '/production',
    children: [
      {
        path: 'order',
        name: 'Production-Order',
        component: () => import('@/components/production/OrderPage.vue')
      },
      {
        path: 'processing',
        name: 'Production-Processing',
        component: () => import('@/components/production/ProcessingPage.vue')
      },
      {
        path: 'production',
        name: 'production-production',
        component: () => import('@/components/production/ProductionPage.vue')

      },
      {
        path: 'catalog',
        name: 'production-catalog',
        component: () => import('@/components/production/CatalogPage.vue')

      },
      {
        path: 'inhand',
        name: 'Production-Inhand',
        component: () => import('@/components/production/InHand.vue')

      },
      {
        path: 'inproduction',
        name: 'Production-Inproduction',
        component: () => import('@/components/production/InProduction.vue')

      },

    ]
  },

  {
    path: '/finishing',
    name: 'Finishing',
    component: () => import('@/components/finishing/FinishingPage.vue')
  },

  {
    path: '/production-manager',
    children: [
      {
        path: 'order',
        name: 'Production-Manager-Order',
        component: () => import('@/components/production manager/OrderPage.vue')
      },
      {
        path: 'allotment',
        name: 'Production-Manager-Allotment',
        component: () => import('@/components/production manager/AllotmentPage.vue')
      },
      {
        path: 'completed',
        name: 'Production-Manager-Completed',
        component: () => import('@/components/production manager/CompletedPage.vue')

      },
      {
        path: 'collection',
        name: 'Production-Manager-Collection',
        children: [
          {
            path: 'production',
            name: 'Production-Manager-Collection-Production',
            component: () => import('@/components/production manager/ProductionPage.vue')
          },
          {
            path: 'fabrication',
            name: 'Production-Manager-Collection-Fabrication',
            component: () => import('@/components/production manager/FabricationPage.vue')
          },
        ]
      },
      {
        path: 'processing',
        name: 'Production-Manager-Processing',
        component: () => import('@/components/production manager/ProcessingPage.vue')
      },
    ]
  }



];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
