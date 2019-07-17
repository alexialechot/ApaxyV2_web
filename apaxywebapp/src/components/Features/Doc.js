import React, { Component, Fragment } from 'react'

/** Images */
import { logosquare } from '../../img'

/** Component */
import { IconsGrid } from '../../components'

export default class Doc extends Component {
	render() {
		return (
			<Fragment>
				<div className="container">
					{/* MAIN HEADER */}
					<div className="App">
						<header className="App-header">
							<img src={logosquare} className="img-fluid" alt="logo" />
							<p>
								Apaxy V2 is a beautiful interface{' '}
								<code className="font-weight-bold">Apache 2</code>
							</p>
						</header>
					</div>
				</div>
			</Fragment>
		)
	}
}
