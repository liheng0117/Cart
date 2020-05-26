import {
  FETCH_SEARCH_HOTDATA,
  FETCH_SEARCH_SEARCHDATA,
  FETCH_SEARCH_TYPESDATA,
  FETCH_SEARCH_FILTERDATA
} from '@/constants/actionTypes';
import { get } from '@/utils/request'
import api from '@/services/api'
// 热词
export function getHotData() {
  return {
    type: FETCH_SEARCH_HOTDATA,
    payload: get(api.hotWordsUrl),
  }
}
// 搜索的数据
export function getSearchData(options, type) {
  return {
    type: FETCH_SEARCH_SEARCHDATA,
    payload: get(`${api.searchUrl}&kwords=${options}&otype=${type}`),
  }
}
// 分类的数据
export function getTypeshData() {
  return {
    type: FETCH_SEARCH_TYPESDATA,
    payload: get(api.typesUrl),
  }
}
// 筛选的数据
export function getFilterData(option) {
  return {
    type: FETCH_SEARCH_FILTERDATA,
    payload: option,
  }
}



