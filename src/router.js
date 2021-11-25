import Vue from "vue";
import VueRouter from "vue-router";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Activities from "./pages/Activities/index";
import Order from "./pages/Activities/Order";
import Dose from "./pages/Activities/Dose";
import Weight from "./pages/Activities/Weight";
import Earning from "./pages/Activities/Earning";
import LoginOverlay from "./pages/LoginOverlay";
import ActivitiesOverlay from "./pages/Activities/Overlay";
import ForgotPasswordSuccess from "./pages/ForgotPasswordSuccess";
import Messages from "./pages/Messages";
import Account from "./pages/Account";
import Info from "./pages/Info";
import WeightOne from "./pages/Weight/One";
import WeightTwo from "./pages/Weight/Two";
import InjectionOne from "./pages/Injection/One";
import InjectionTwo from "./pages/Injection/Two";
import Administrate from "./pages/Administrate";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
    },
    {
      path: "/signup",
      name: "SignUp",
      component: SignUp,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/activities",
      name: "Activities",
      component: Activities,
    },
    {
      path: "/activities/order",
      name: "Activities Order",
      component: Order,
    },
    {
      path: "/activities/earning",
      name: "Activities Earning",
      component: Earning,
    },
    {
      path: "/activities/dose",
      name: "Activities Dose",
      component: Dose,
    },
    {
      path: "/activities/weight",
      name: "Activities Weight",
      component: Weight,
    },
    {
      path: "/activities/overlay",
      name: "ActivitiesOverlay",
      component: ActivitiesOverlay,
    },
    {
      path: "/forgot-password/success",
      name: "ForgotPasswordSuccess",
      component: ForgotPasswordSuccess,
    },
    {
      path: "/login/overlay",
      name: "LoginOverlay",
      component: LoginOverlay,
    },
    {
      path: "/messages",
      name: "Messages",
      component: Messages,
    },
    {
      path: "/account",
      name: "Account",
      component: Account,
    },
    {
      path: "/info",
      name: "Info",
      component: Info,
    },
    {
      path: "/weight/one",
      name: "Weight",
      component: WeightOne,
    },
    {
      path: "/weight/two",
      name: "Weight",
      component: WeightTwo,
    },
    {
      path: "/Injection/one",
      name: "Injection",
      component: InjectionOne,
    },
    {
      path: "/Injection/two",
      name: "Injection",
      component: InjectionTwo,
    },
    {
      path: "/administrate",
      name: "Administrate",
      component: Administrate,
    },
    
  ],
});

export default router;
