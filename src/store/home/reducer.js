

import state from './state'

import { CHANGE_HOME_NAVS , CHANGE_HOME_BANNERS, CHANGE_HOME_SPECIALS } from './const'

const reducer = (previousState = state , action) => {
	let new_state = { ...previousState }
	switch(action.type){
		case CHANGE_HOME_NAVS:
			new_state.navs = action.navs; 
		break;

		case CHANGE_HOME_BANNERS: 
			new_state.banners = action.banners; 
		break;

		case CHANGE_HOME_SPECIALS: 
			new_state.special = action.special; 
		break;
		
		default: break;
	}
	return new_state
}


export default reducer