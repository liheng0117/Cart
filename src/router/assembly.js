import Loadable from '@@/Loadable';

<<<<<<< HEAD
const Goods = Loadable(() => import("@/pages/goods"));
const Shop = Loadable(() => import("@/pages/shop"));
const Detail = Loadable(() => import("@/pages/detail"));
const Commet = Loadable(() => import("@/pages/commet"));

export { Goods,Shop,Detail,Commet };
=======
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
>>>>>>> 13b7d95a36abc78e9d7d1f732742692d338d8ede
