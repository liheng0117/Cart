import Loadable from "../components/Loadable";

const Goods = Loadable(() => import("@/pages/goods"));
const Shop = Loadable(() => import("@/pages/shop"));
const Detail = Loadable(() => import("@/pages/detail"));
const Commet = Loadable(() => import("@/pages/commet"));

export { Goods,Shop,Detail,Commet };
