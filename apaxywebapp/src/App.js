import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

/** Components */
import { NavBar, Footer, NotFound, Appaxy, Doc } from './components'

export default class App extends Component {
	render() {
		return (
			<Fragment>
				{/* like index.js - default page that are implemented in all pages */}

				<Router>
					{/* NAVBAR */}
					<NavBar />

					{/* CONTENT */}

					{/* ROUTER */}
					{/* Select page for each path */}

					<Switch>
						{/* MENU - NAVBAR */}
						<Route exact path="/" component={Appaxy} />
						<Route exact path="/documentation" component={Doc} />

						{/* 404 */}
						<Route path="" component={NotFound} />
					</Switch>
				</Router>

				{/* FOOTER */}
				<Footer />
			</Fragment>
		)
	}
}
