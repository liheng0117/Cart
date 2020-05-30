const initialState = {

}

export default (state = initialState, { type, payload }) => {
    switch (type) {

     case 'GET_DETAIL_SIZE':
        
        return {color:payload.data[0].values,size:payload.data[1].values,amount:1}
    default:
        return state
    }
}
