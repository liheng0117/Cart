import Loadable from '@@/Loadable'

const Cart = Loadable(() => import('@/pages/cart'))
const User = Loadable(() => import('@/pages/user'))
const Search = Loadable(() => import('@/pages/search'))
const SearchGoods = Loadable(() => import('@/pages/searchgoods'))
const Home = Loadable(() => import('@/pages/home'))
const Login = Loadable(() => import('@/pages/login'))
const Reg = Loadable(() => import('@/pages/reg'))
const Classification = Loadable(() => import('@/pages/classification'))
const Goods = Loadable(() => import('@/pages/goods'))
const Shop = Loadable(() => import('@/pages/shop'))
const Detail = Loadable(() => import('@/pages/detail'))
const Commet = Loadable(() => import('@/pages/commet'))
const Classgoods = Loadable(() => import('@/pages/classgoods'))

export {
  Home,
  Login,
  Reg,
  Search,
  SearchGoods,
  Cart,
  User,
  Goods,
  Shop,
  Detail,
  Commet,
  Classgoods,
  Classification,
}
