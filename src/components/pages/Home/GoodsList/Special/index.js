

import React, { Component } from 'react'
import './index.scss'

import HomeTitle from '../../../../commons/HomeTitle'

import SpecialItem from './SpecialItem'

import { GroupHome } from '../../../../../modules/group'


class Special extends Component{
	constructor(props){
		super(props)
		this.state = {
			
		}
	}


	componentWillMount(){
		this.props.getHomeSpecial()
	}

	componentDidMount(){}

	shouldComponentUpdate(props){
		if(props.special !== this.props.special) return true;
		return false;
	}

	renderItems(){
		let { special } = this.props;
		if( !special ) return '';
		return special.map( (item,index) => (
			<SpecialItem data={item} key={ index }/>
		))
		
	}
	
	render(){
		return (
			<div className='special'>
                <HomeTitle>专题</HomeTitle>
				{ this.renderItems() }
            </div>
		)
	}
	
}


export default GroupHome(Special)