const detState={
  islogin:false,
}
export default function login (state = detState, action){
	switch (action.type) {
			case "FETCH_LOGIN_ISLOGIN":
					return { islogin:state.islogin }
					
					default:
							return state

	}
}