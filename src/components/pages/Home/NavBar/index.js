

import React, { Component } from 'react'
import './index.scss'

import Swiper from 'swiper'

import { GroupHome } from '../../../../modules/group'

class NavBar extends Component{
	constructor(props){
		super(props)
		this.state = {
			
		}
	}
	
	initialSwiper(){
		new Swiper(this.swiper,{
			slidesPerView : 'auto',
			slideToClickedSlide: true
		})
	}

	componentDidMount(){
		if(this.props.navs){
			this.initialSwiper();
			return false
		} 
		this.props.getHomeNavs(()=>{
			setTimeout(()=>{
				this.initialSwiper();
			}, 0)
		})
	}


	componentDidUpdate(){
		
	}



	renderItem(){
		let { navs } = this.props
		if(!navs) return ''
		return navs.map( item =>(
					<div key = {item.id} className='swiper-slide'>
						<span>{ item.name }</span>
					</div>
		))
	}

	render(){
		return (
			<div ref={ el => this.swiper = el } className='swiper-container home-nav-bar'>
				<div className='swiper-wrapper'>
					{ this.renderItem() }
				</div>
			</div>
		)
	}
	
}

export default GroupHome( NavBar )