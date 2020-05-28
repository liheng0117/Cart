<<<<<<< HEAD
import Loadable from "@@/Loadable";

const Home = Loadable(() => import("@/pages/home"));
const Cart = Loadable(() => import("@/pages/cart"));
const User = Loadable(() => import("@/pages/user"));

export { 
  Home,
  Cart,
  User
};
=======
import Loadable from '@@/Loadable';

<<<<<<< HEAD
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
=======
const Goods = Loadable(() => import("@/pages/goods"));
const Shop = Loadable(() => import("@/pages/shop"));
const Detail = Loadable(() => import("@/pages/detail"));
const Commet = Loadable(() => import("@/pages/commet"));

export { Goods,Shop,Detail,Commet };
>>>>>>> cpf
>>>>>>> 8aeb350925f55f568a033955d71cc43966b86e79
