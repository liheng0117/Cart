const detState={
  isReg:false,
}
export default function login (state = detState, action){
	switch (action.type) {
		case "FETCH_REG_ISREG":
      return { isReg:state.isReg };
    case "FETCH_REG_GETCODE":
			return { isReg:state.isReg }
					
		default:
			return state

	}
}