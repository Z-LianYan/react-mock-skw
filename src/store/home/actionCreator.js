

import axios from '../../modules/axios-util'

import { CHANGE_HOME_NAVS, CHANGE_HOME_BANNERS } from './const'

import config from '../../modules/config'
let { dtwww, dtbuy } = config
const actionCreator = {
	getHomeNavs(callback){
        return dispatch => {
            axios.Get({url: dtbuy + 'napi/buy/category/list/',data:{
                timestamp: Date.now()
            }}).then( res=>{
                let navs = res.data.data.object_list
                console.log(navs)
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
                console.log(banners)
                dispatch({ type: CHANGE_HOME_BANNERS, banners })
                if(callback) callback()
            })
        }
    }


}

export default actionCreator