import React, { Component } from 'react'
import './index.scss'

import { Toast } from 'antd-mobile'

class LoginUserForm extends Component{
	constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
		this.state = {
			
		}
    }
    
    handleSubmit(e){
        let { login } = this.props
        e.preventDefault()
        login({
            username:this.username.value,
            password:this.password.value,
            success(){
                Toast.success('登录成功')
            },
            fail(){
                Toast.fail('登录失败')
            }
        })
    }
	
	render(){
		return (
            <form onSubmit = { this.handleSubmit } >
                <div className='form-group'>
                    <input ref = {el => this.username = el } type='text' placeholder='账号' />
                </div>
                <div className='form-group'>
                    <input ref = {el => this.password = el } type='password' placeholder='密码' />
                </div>
                <button className="btn">登陆</button>
            </form>
		)
	}
	
}

export default LoginUserForm