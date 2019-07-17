import React, { Component, Fragment } from 'react'

/** Images */

export default class Footer extends Component {
	render() {
		return (
			<Fragment>
				<div className="Footer text-center bg-dark text-white ">
					{/* COPYRIGHT */}
					<div className="container py-2">
						<h4 className="text-center my-5">
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

						<h4>
							Website by {' '}
							<a
								className="App-link"
								href="https://krakenwave.ch"
								target="_blank"
								rel="noopener noreferrer"
							>
								KRAKENWAVE
							</a>{' '}
							© 2019
						</h4>
					</div>
				</div>
			</Fragment>
		)
	}
}
