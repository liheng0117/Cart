import Loadable from '@@/Loadable';

const Search = Loadable(() => import('@/pages/search'));
const SearchGoods = Loadable(() => import('@/pages/searchgoods'));
const Home = Loadable(() => import("@/pages/home"));
const Login = Loadable(() => import("@/pages/login"));
const Reg = Loadable(() => import("@/pages/reg"));

export { 
  Home,
  Login,
  Reg,
  Search,
  SearchGoods
};
