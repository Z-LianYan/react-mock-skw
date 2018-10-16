import React, { Component } from 'react'
import './index.scss'

import { Toast } from 'antd-mobile'

class LoginTextForm extends Component{
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
            phone:this.phone.value,
            code:this.code.value,
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
                    <input ref = { e => this.phone = e } type='text' placeholder='手机号' />
                </div>
                <div className='form-group'>
                    <input ref = { e => this.code = e } type='text' placeholder='验证码' />
                </div>
                <button className="btn">登陆</button>
            </form>
		)
	}
	
}

export default LoginTextForm