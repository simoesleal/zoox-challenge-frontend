import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "dashboard",
    component: () =>
      import(
        /* webpackChunkName: "main" */ "../components/layouts/TheMain.vue"
      ),
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () =>
          import(/* webpackChunkName: "main" */ "../views/Dashboard.vue"),
      },
      {
        path: "states",
        name: "StateList",
        component: () =>
          import(
            /* webpackChunkName: "geographical" */ "../views/geographical/StateList.vue"
          ),
      },
      {
        path: "state/details",
        name: "StateDetails",
        component: () =>
          import(
            /* webpackChunkName: "geographical" */ "../views/geographical/StateDetails.vue"
          ),
      },
      {
        path: "cities",
        name: "CityList",
        component: () =>
          import(
            /* webpackChunkName: "geographical" */ "../views/geographical/CityList.vue"
          ),
      },
      {
        path: "city/details",
        name: "CityDetails",
        component: () =>
          import(
            /* webpackChunkName: "geographical" */ "../views/geographical/CityDetails.vue"
          ),
      },
    ],
  },
  {
    path: "*",
    redirect: "dashboard",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
