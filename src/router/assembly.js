import Loadable from '@@/Loadable';

const Search = Loadable(() => import('@/pages/search'));
const SearchGoods = Loadable(() => import('@/pages/searchgoods'));

export { Search, SearchGoods };
