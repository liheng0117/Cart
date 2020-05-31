import {
  GET_BANNERLIST,
  GET_NAVLIST,
  GET_GOODSLIST,
  GET_RECOMLIST,
} from '@/constants/actionTypes'
import { get } from '@/utils/request'
import api from '@/services/api'
//获取轮播图数据
export function getBanner() {
  return {
    type: GET_BANNERLIST,
    payload: get(api.bannerUrl),
  }
}
//获取导航数据
export function getNav() {
  return {
    type: GET_NAVLIST,
    payload: get(api.navUrl),
  }
}
//获取产品数据
export function getGoods() {
  return {
    type: GET_GOODSLIST,
    payload: get(api.goodsUrl),
  }
}
//获取为你推荐数据
export function getRecom() {
  return {
    type: GET_RECOMLIST,
    payload: get(api.recomUrl),
  }
}
