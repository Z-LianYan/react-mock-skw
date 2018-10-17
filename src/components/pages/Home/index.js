

import React, { Component } from 'react'
import './index.scss'

import NavBar from './NavBar'

import Banner from './Banner'

import GoodsList from './GoodsList'



class Home extends Component{
	constructor(props){
		super(props)
		this.state = {
			
		}
	}

	
	render(){
		return (
			<div className='page home'>
				<NavBar/>
				<Banner/>
				<GoodsList/>
			</div>
		)
	}
	
}

export default Home