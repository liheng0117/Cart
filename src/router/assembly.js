import Loadable from '@@/Loadable';

<<<<<<< HEAD
const Search = Loadable(() => import('@/pages/search'));
const SearchGoods = Loadable(() => import('@/pages/searchgoods'));

export { Search, SearchGoods };
=======
const Home = Loadable(() => import("@/pages/home"));
const Login = Loadable(() => import("@/pages/login"));
const Reg = Loadable(() => import("@/pages/reg"));
export { 
  Home,
  Login,
  Reg,
};
>>>>>>> szs
