
import { CHECK_USER_INFO } from './const.js'

const actionCreator = {

	getInitialUserInfo(){
		let userInfo = localStorage.userInfo ? JSON.parse(localStorage.userInfo) : null
		return { type:CHECK_USER_INFO,userInfo }
	},

	loginByUser( { success, fail, username, password } ){
		return dispatch => {
			setTimeout(() => {
				if ( username === '123' && password === '456'){
					let userInfo = { 
						username:'二狗子' 
					}
					dispatch({ type:CHECK_USER_INFO,userInfo })
					if(success) success()
					localStorage.userInfo = JSON.stringify(userInfo)
					return false;
				}
				if(fail) fail()
			},1000)
		}
	},

	loginByText( { success, fail, phone, code } ){
		return dispatch => {
			setTimeout(() => {
				if ( phone === '13129715752' && code === '666'){
					let userInfo = { 
						username:'二狗子' 
					}
					dispatch({ type:CHECK_USER_INFO,userInfo })
					if(success) success()
					// localStorage.userInfo = JSON.stringify(userInfo)
					localStorage.userInfo = JSON.stringify(userInfo)
					return false;
				}
				if(fail) fail()
			},1000)
		}
	},

	exit(){
		return { type:CHECK_USER_INFO, userInfo:null }
	}
	
}

export default actionCreator