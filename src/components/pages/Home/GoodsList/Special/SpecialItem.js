

import React, { Component } from 'react'
import './index.scss'
import util from '../../../../../modules/util'
import Swiper from 'swiper'
//.thumb.750_0_c

const SlideItem = (props) => {
    let { pictures, inventory_caption, vip_sale_price, origin_price } = props.data
    return (
        <div className="swiper-slide">
            <div className='slide-img-box'>
                <img
                width='100%' src={util.formatImageUrl(pictures[0], '.thumb.200_200_c')} alt=""/>
            </div>     
            <p className='title'>{inventory_caption}</p> 
            <p className='price'>
            {
                !vip_sale_price ||  (<span className="color">￥{vip_sale_price}</span>)
            }
              <span className={"normal " + (vip_sale_price ? 'through' : 'color')}>￥{origin_price}</span>
                
            </p>
        </div>
    )
}
class SpecialItem extends Component {
    constructor (props) {
        super(props)
        this.state={
            
        }
    }
    renderSlideItems () {
        let { inventory_list } = this.props.data
        if ( !inventory_list ) return ''
        return inventory_list.map(item => {
            return (
                <SlideItem key = {item.id} data={item}/>
            )
        })
    }
    componentDidMount () {
        //这里special是有了数据之后采取渲染的specialItem，所以可以在componentDidMount周期函数直接实例实例化swiper
        new Swiper(this.el, {
            slidesPerView: 'auto'
        })
    }
    render () {
        let { image_url } = this.props.data
        return (
            <div className='special-item'>
                <div className=" banner-img-box ">
                    <img width='100%' src={ util.formatImageUrl(image_url) } alt=""/>
                </div>

                <div ref = {el => this.el = el} className="swiper-container goods">
                    <div className="swiper-wrapper">
                        { this.renderSlideItems() }
                    </div>
                </div>
            </div>
        )
    }
}

export default SpecialItem