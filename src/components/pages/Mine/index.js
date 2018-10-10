

import React, { Component } from 'react'
import './index.scss'
import { GroupCommons } from '../../../modules/group'
import { Route } from 'react-router-dom'
import Login from './Login'
import User from './User'

class Mine extends Component{
	constructor(props){
		super(props)
		this.state = {
			
		}
	}
	
	checkLogin(){
		let { userInfo, history } = this.props
		let { replace } = history
		if( userInfo ){
			replace('./mine/user')
		}else{
			replace('/mine/login')
		}
	}
	
	componentDidMount(){
		this.checkLogin()
	}
	
	
	render(){
		console.log(this)
		return (
			<div className='app-mine'>
				<Route path='/mine/login' component={ Login } />
				<Route path='/mine/user' component={ User } />
			</div>
		)
	}
	
}

export default GroupCommons(Mine)