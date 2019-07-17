import React, { Component, Fragment } from 'react'

/** Images */

export default class Footer extends Component {
	render() {
		return (
			<Fragment>
				<div className="Footer bg-dark">
					{/* COPYRIGHT */}
					<div className="container py-2 text-white text-center">
						<h4 className="my-5">
							Apaxy V2 by{' '}
							<a
								className="App-link"
								href="https://fusengine.ch"
								target="_blank"
								rel="noopener noreferrer"
							>
								Fusengine
							</a>{' '}
							© 2017
						</h4>

						<h4 className="my-5">
							Website by {' '}
							<a
								className="App-link"
								href="https://krakenwave.ch"
								target="_blank"
								rel="noopener noreferrer"
							>
								Krakenwave
							</a>{' '}
							© 2019
						</h4>
					</div>
				</div>
			</Fragment>
		)
	}
}
