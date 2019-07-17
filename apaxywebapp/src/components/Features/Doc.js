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
					<header className="PageCenter">
						<img src={logosquare} className="img-fluid" alt="logo" />
						<p>
							Apaxy V2 is a beautiful interface Apache 2
							<code className="font-weight-bold">localhost</code>
						</p>
					</header>
				</div>
			</Fragment>
		)
	}
}
