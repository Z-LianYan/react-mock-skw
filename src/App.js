import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { Home, BuyCar, List, Mine } from './components/pages'

import AppFooter from './components/commons/AppFooter'

class App extends Component {
	
	renderRoute(){
		let { routes } = this.props
		return (
			<Switch>
				{routes.map( item => <Route key = {item.id} 
					path={item.path} component = { item.component } exact = {item.exact} />)}
      </Switch>
		)
	}
	
  render() {
    return (
      <div className="App">
	      {this.renderRoute()}
	      <AppFooter/>
      </div>
    );
  }
  
  componentDidMount(){
  
  }
  
}

App.defaultProps = {
	routes:[
		{ id:1, path:'/', component:Home, exact:true },
		{ id:2, path:'/list', component:List },
		{ id:3, path:'/buycar', component:BuyCar },
		{ id:4, path:'/mine', component:Mine }
	]
}

export default App;
