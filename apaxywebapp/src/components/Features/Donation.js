import React, { Component, Fragment } from 'react'

/** Images */
import { logosquare } from '../../img'

export default class Donation extends Component {
	render() {
		return (
			<Fragment>
				<div className="container">
					{/* MAIN HEADER */}
					<header className="PageCenter">
						<img src={logosquare} className="img-fluid" alt="logo" />
						<p>
							Donation, please consider this work
							<code className="font-weight-bold"> THANK YOU !</code>
						</p>
					</header>
				</div>
			</Fragment>
		)
	}
}
