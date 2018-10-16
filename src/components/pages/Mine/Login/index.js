

import React, { Component } from 'react'
import './index.scss'
import { GroupCommons } from '../../../../modules/group'

import { NavBar,Icon } from 'antd-mobile'

import LoginTextForm from './LoginTextForm'

import LoginUserForm from './LoginUserForm'


class Login extends Component{
	constructor(props){
		super(props)
		this.state = {
			loginType:'text'
		}
		this.backIndex = this.backIndex.bind(this)
	}
	
	renderLoginForm(){
		let { loginType } = this.state
		let { loginByUser, loginByText } = this.props
		let Form = LoginTextForm
		let title = '账号密码登录'
		let type = 'user'
		let login = loginByText
		if(loginType !== 'text'){
			Form = LoginUserForm
			title = '短信快捷登录'
			type = 'text'
			login = loginByUser
		}
		let handlclick = () => {
			this.setState({loginType:type})
		}

		return (
			<div className = 'content'>
				<Form login = { login }/>
				<div onClick = { handlclick } className='change-text'>{title}</div>
			</div>
		)

	}

	backIndex(){
		this.props.history.push('/')
	}

	render(){
		let { loginType } = this.state
		return (
			<div className='login'>
				<NavBar
					mode="dark"
					icon={<Icon type="left" />}
					onLeftClick = { this.backIndex }
				>{ loginType === 'text' ? '短信验证' : '账号密码'}登录 </NavBar>


				{ this.renderLoginForm() }


			</div>
		)
	}
	
}

export default GroupCommons(Login)