import React, { Component, Fragment } from 'react'

/** Images */
import { feather, logotext } from '../../img'

/** Component */
import { IconsGrid } from '../../components'

export default class Appaxy extends Component {
	render() {
		return (
			<Fragment>
				<div className="container">
					{/* MAIN HEADER */}
					<div className="App">
						<header className="App-header">
							<img src={feather} className="img-fluid LogoAnim mb-3" alt="logo" />
							<img src={logotext} className="img-fluid my-4" alt="logo" />
							<p className="mt-5 pt-5">
								Apaxy V2 is a beautiful interface{' '}
								<code className="font-weight-bold">Apache 2</code>
							</p>
						</header>
					</div>

					{/* ICONS GRID */}
					<IconsGrid />
				</div>
			</Fragment>
		)
	}
}
