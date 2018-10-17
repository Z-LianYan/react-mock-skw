

import axios from '../../modules/axios-util'

import { CHANGE_HOME_NAVS, CHANGE_HOME_BANNERS , CHANGE_HOME_SPECIALS } from './const'

import config from '../../modules/config'
let { dtwww, dtbuy } = config
const actionCreator = {
	getHomeNavs(callback){
        return dispatch => {
            axios.Get({url: dtbuy + 'napi/buy/category/list/',data:{
                timestamp: Date.now()
            }}).then( res=>{
                let navs = res.data.data.object_list
                console.log('nav',navs)
                dispatch({ type: CHANGE_HOME_NAVS, navs })
                if(callback) callback()
            })
        }
    },

    getHomeBanners(callback){
        return dispatch => {
            axios.Get({url: dtwww + 'napi/ad/banner/list/',data:{
                ad_id: 'COM001',
                limit: 5,
                start: 0,
                timestamp: Date.now()
            }}).then( res=>{
                let banners = res.data.data.object_list
                console.log('banner',banners)
                dispatch({ type: CHANGE_HOME_BANNERS, banners })
                if(callback) callback()
            })
        }
    },

    getHomeSpecial(callback){
        return dispatch => {
            axios.Get({url: dtbuy + 'napi/buy/index/popular/list/',data:{
                limit: 5,
                start: 0,
                timestamp: Date.now()
            }}).then( res=>{
                let special = res.data.data.object_list
                console.log('special', special)
                dispatch({ type: CHANGE_HOME_SPECIALS, special })
                if(callback) callback()
            })
        }
    }


}

export default actionCreator