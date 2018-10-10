

import React, { Component } from 'react'
import './index.scss'
import { GroupCommons } from '../../../../modules/group'


class Login extends Component{
	constructor(props){
		super(props)
		this.state = {
			
		}
	}
	
	render(){
		return (
			<div className=''>
				login
				<button onClick = { this.props.login}>login</button>
			</div>
		)
	}
	
}

export default GroupCommons(Login)