

import React, { Component } from 'react'
import './index.scss'

import Swiper from 'swiper'

import { GroupHome  } from '../../../../modules/group'

class Banner extends Component{
	constructor(props){
		super(props)
		this.state = {
			
		}
	}
	

	componentDidMount(){
		this.props.getHomeBanners(()=>{
			if(this.props.banner){
				this.initialImgSwiper();
				return false;
			}
			setTimeout(() => {
				this.initialImgSwiper();
			}, 0);
		})
	}

	initialImgSwiper(){
		new Swiper(this.imgSwiper,{
			autoplay:{
				disableOnInteraction: false,
			},
			loop : true,
			disableOnInteraction: false,
			pagination: {
				el: '.swiper-pagination',
			},
		})
	}


	renderImgSwiper(){
		let { banners } =this.props;
		if(!banners) return ''

		return banners.map((item,index)=>{
				return  <div key={index} className='swiper-slide'>
							<img src={item.image_url} alt='' />
						</div>
		})

	}


	render(){
		return (
			<div ref={ el => this.imgSwiper = el } className='swiper-container home-banner'>
				<div className='swiper-wrapper'>
					{ this.renderImgSwiper() } 
				</div>
				<div className="swiper-pagination"></div>
			</div>
		)
	}
}

export default GroupHome(Banner)