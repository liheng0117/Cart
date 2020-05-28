import { 
  FETCH_SEARCH_HOTDATA,
  FETCH_SEARCH_SEARCHDATA,
  FETCH_SEARCH_TYPESDATA,
  FETCH_SEARCH_FILTERDATA
} from '@/constants/actionTypes';

const defaultState = {
  hotData: [],
  searchData:[],
  typesData:[]
}

export default function home(state = defaultState, action) {
  switch (action.type) {
    case FETCH_SEARCH_HOTDATA:
      return { ...state, hotData: action.payload.data }
    case FETCH_SEARCH_SEARCHDATA:
      sessionStorage.setItem("search", JSON.stringify(action.payload.data))
      return { ...state, searchData: action.payload.data }
    case FETCH_SEARCH_TYPESDATA:
      return { ...state, typesData: action.payload.data }
    case FETCH_SEARCH_FILTERDATA:
      return { ...state, searchData: action.payload }
    default:
      return state
  }
}

