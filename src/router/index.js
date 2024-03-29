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
    path: "/databindinglist2",
    name: "DataBindingList2",
    component: () => import("../views/DataBindingList2.vue"),
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
  {
    path: "/nested",
    name: "NestedComponent",
    component: () => import("../views/NestedComponent.vue"),
  },
  {
    path: "/parent",
    name: "ParentComponent",
    component: () => import("../views/ParentComponent.vue"),
  },
  {
    path: "/parent2",
    name: "ParentComponent2",
    component: () => import("../views/ParentComponent2.vue"),
  },
  {
    path: "/parent3",
    name: "ParentComponent3",
    component: () => import("../views/ParentComponent3.vue"),
  },
  {
    path: "/parent4",
    name: "ParentComponent4",
    component: () => import("../views/ParentComponent4.vue"),
  },
  {
    path: "/parent5",
    name: "ParentComponent5",
    component: () => import("../views/ParentComponent5.vue"),
  },
  {
    path: "/slot",
    name: "SlotUseModalLayout",
    component: () => import("../views/SlotUseModalLayout.vue"),
  },
  {
    path: "/provide",
    name: "ProvideInject",
    component: () => import("../views/ProvideInject.vue"),
  },
  {
    path: "/calculator",
    name: "SumCalculator",
    component: () => import("../views/SumCalculator.vue"),
  },
  {
    path: "/composition",
    name: "CompositionAPI",
    component: () => import("../views/CompositionAPI.vue"),
  },
  {
    path: "/composition2",
    name: "CompositionAPI2",
    component: () => import("../views/CompositionAPI2.vue"),
  },
  {
    path: "/composition3",
    name: "CompositionAPI3",
    component: () => import("../views/CompositionAPI3.vue"),
  },
  {
    path: "/composition4",
    name: "CompositionAPI4",
    component: () => import("../views/CompositionAPI4.vue"),
  },
  {
    path: "/composition_provide",
    name: "CompositionAPIProvide",
    component: () => import("../views/CompositionAPIProvide.vue"),
  },
  {
    path: "/mixinsex",
    name: "MixinsEx",
    component: () => import("../views/MixinsEx.vue"),
  },
  {
    path: "/customdirective",
    name: "CustomDirective",
    component: () => import("../views/CustomDirective.vue"),
  },
  {
    path: "/pluginsex",
    name: "PluginsEx",
    component: () => import("../views/PluginsEx.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
