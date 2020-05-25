import Loadable from "@@/Loadable";

const Home = Loadable(() => import("@/pages/home"));
const Cart = Loadable(() => import("@/pages/cart"));
const User = Loadable(() => import("@/pages/user"));

export { 
  Home,
  Cart,
  User
};
