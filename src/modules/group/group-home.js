
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreator from '../../store/home/actionCreator'


export default connect(state => state.home, dispatch => {
    return bindActionCreators(actionCreator, dispatch)
})