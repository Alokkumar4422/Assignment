import React from 'react'
import { Route } from 'react-router-dom'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Header from '../Header'
import Dashboard from '../Dashboard'
import Imagewithdata from '../Imagewithdata'

class Navigation extends React.Component {
	render() {
		return (
			<Router>
				<Header />
				<Switch>
					<Route exact path='/' component={Dashboard} />
					<Route path='/images-with-data' component={Imagewithdata} />
				</Switch>
			</Router>
		)
	}
}
export default Navigation;