import Loadable from "../components/Loadable";

const Login = Loadable(() => import("@/pages/login"));
const Reg = Loadable(() => import("@/pages/reg"));
const Classification = Loadable(() => import("@/pages/classification"));
const Classgoods = Loadable(() => import("@/pages/classgoods"));
export { 
  Login,
  Reg,
  Classification,
  Classgoods,
};
