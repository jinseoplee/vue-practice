import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/databinding",
    name: "DataBinding",
    component: () => import("../views/DataBinding.vue"),
  },
  {
    path: "/databindinghtml",
    name: "DataBindingHtml",
    component: () => import("../views/DataBindingHtml.vue"),
  },
  {
    path: "/databindinginputtext",
    name: "DataBindingInputText",
    component: () => import("../views/DataBindingInputText.vue"),
  },
  {
    path: "/databindinginputnumber",
    name: "DataBindingInputNumber",
    component: () => import("../views/DataBindingInputNumber.vue"),
  },
  {
    path: "/databindingtextarea",
    name: "DataBindingTextarea",
    component: () => import("../views/DataBindingTextarea.vue"),
  },
  {
    path: "/databindingselect",
    name: "DataBindingSelect",
    component: () => import("../views/DataBindingSelect.vue"),
  },
  {
    path: "/databindingcheckbox",
    name: "DataBindingCheckbox",
    component: () => import("../views/DataBindingCheckbox.vue"),
  },
  {
    path: "/DataBindingCheckbox2",
    name: "DataBindingCheckbox2",
    component: () => import("../views/DataBindingCheckbox2.vue"),
  },
  {
    path: "/databindingradio",
    name: "DataBindingRadio",
    component: () => import("../views/DataBindingRadio.vue"),
  },
  {
    path: "/databindingattribute",
    name: "DataBindingAttribute",
    component: () => import("../views/DataBindingAttribute.vue"),
  },
  {
    path: "/databindingbutton",
    name: "DataBindingButton",
    component: () => import("../views/DataBindingButton.vue"),
  },
  {
    path: "/databindingclass",
    name: "DataBindingClass",
    component: () => import("../views/DataBindingClass.vue"),
  },
  {
    path: "/databindingclass2",
    name: "DataBindingClass2",
    component: () => import("../views/DataBindingClass2.vue"),
  },
  {
    path: "/databindingstyle",
    name: "DataBindingStyle",
    component: () => import("../views/DataBindingStyle.vue"),
  },
  {
    path: "/databindingstyle2",
    name: "DataBindingStyle2",
    component: () => import("../views/DataBindingStyle2.vue"),
  },
  {
    path: "/databindinglist",
    name: "DataBindingList",
    component: () => import("../views/DataBindingList.vue"),
  },
  {
    path: "/renderingvif",
    name: "RenderingVIf",
    component: () => import("../views/RenderingVIf.vue"),
  },
  {
    path: "/eventclick",
    name: "EventClick",
    component: () => import("../views/EventClick.vue"),
  },
  {
    path: "/eventchange",
    name: "EventChange",
    component: () => import("../views/EventChange.vue"),
  },
  {
    path: "/computedex",
    name: "ComputedEx",
    component: () => import("../views/ComputedEx.vue"),
  },
  {
    path: "/watchex",
    name: "WatchEx",
    component: () => import("../views/WatchEx.vue"),
  },
  {
    path: "/watchex2",
    name: "WatchEx2",
    component: () => import("../views/WatchEx2.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
