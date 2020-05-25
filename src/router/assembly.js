import Loadable from "../components/Loadable";

const Home = Loadable(() => import("@/pages/home"));
const Login = Loadable(() => import("@/pages/login"));
const Reg = Loadable(() => import("@/pages/reg"));
export { 
  Home,
  Login,
  Reg,
};
