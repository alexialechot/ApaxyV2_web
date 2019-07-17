import React, { Component, Fragment } from 'react'

/** Images */

export default class Footer extends Component {
	render() {
		return (
			<Fragment>
				<div className="Footer text-center bg-dark text-white ">
					{/* COPYRIGHT */}
					<div className="container py-2">
						<h4>
							© 2019{' '}
							<a
								className="App-link"
								href="https://krakenwave.ch"
								target="_blank"
								rel="noopener noreferrer"
							>
								KRAKENWAVE
							</a>
						</h4>
					</div>
				</div>
			</Fragment>
		)
	}
}
