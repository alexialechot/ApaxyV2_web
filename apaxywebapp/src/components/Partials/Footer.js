import React, { Component, Fragment } from 'react'

/** Images */

export default class Footer extends Component {
	render() {
		return (
			<Fragment>
				<div className="container">
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
				</div>
				<div className="Footer bg-dark text-center">
					{/* Doc Link */}
					<div className="pt-5">
						<li className="nav-item d-inline-block my-auto ">
							<a
								className="nav-link"
								href="https://hub.docker.com/r/fusengine/apaxy"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fab fa-docker text-white fa-lg HoverAnim" />
							</a>
						</li>
						<li className="nav-item d-inline-block my-auto">
							<a
								className="nav-link"
								href="https://github.com/fusengine/apaxy-v2"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fab fa-github text-white fa-lg HoverAnim" />
							</a>
						</li>
						<li className="nav-item d-inline-block my-auto">
							<a
								className="nav-link"
								href="https://github.com/fusengine/apaxy-v2"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fas fa-donate text-white fa-lg HoverAnim" />
							</a>
						</li>
					</div>
					{/* COPYRIGHT */}
					<div className="container py-2 text-white text-center">
						<h4 className="mt-5 mb-1">
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
