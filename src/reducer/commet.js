const initialState = {

}

export default (state = initialState, { type, payload }) => {
    switch (type) {

     case 'GET_DETAIL_COMMET':
        
        return payload.data
    default:
        return state
    }
}
