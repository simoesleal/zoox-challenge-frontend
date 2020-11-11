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
        name: "StateSearch",
        component: () =>
          import(
            /* webpackChunkName: "geographical" */ "../views/geographical/StateSearch.vue"
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
        name: "CitiesSearch",
        component: () =>
          import(
            /* webpackChunkName: "geographical" */ "../views/geographical/CitiesSearch.vue"
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
