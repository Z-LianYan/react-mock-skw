

import React, { Component } from 'react'
import './index.scss'

import NavBar from './NavBar'

import Banner from './Banner'

class Home extends Component{
	constructor(props){
		super(props)
		this.state = {
			
		}
	}

	
	render(){
		return (
			<div className='app-home'>
				<NavBar/>
				<Banner/>
			</div>
		)
	}
	
}

export default Home