
import { CHECK_USER_INFO } from './const.js'

const actionCreator = {
	login(){
		return dispatch => {
			setTimeout(() => {
				dispatch({type:CHECK_USER_INFO,userInfo:{
					username:'二狗子'
				}})
			},1000)
		}
	}
}

export default actionCreator