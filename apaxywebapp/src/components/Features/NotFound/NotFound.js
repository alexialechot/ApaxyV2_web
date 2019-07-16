import React, { Component, Fragment } from 'react'

/** Component */

/** Images */
import { logosquare } from '../../../img'

export default class NotFound extends Component {
	render() {
		return (
			<Fragment>
				<div className="App">
					<header className="App-header">
						<img src={logosquare} className="" alt="logo" />
						<p className="mt-3">
							<code>Error 404 </code> Page not found
						</p>
					</header>
				</div>
			</Fragment>
		)
	}
}
