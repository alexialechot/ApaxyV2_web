import React, { Component, Fragment } from 'react'

/** Images */
import { feather, logotext, preview } from '../../img'

/** Component */
import { IconsGrid } from '../../components'

export default class Appaxy extends Component {
	render() {
		return (
			<Fragment>
				{/* MAIN HEADER */}
				<header className="container PageCenter">
					<img src={feather} className="img-fluid LogoAnim mb-3" alt="logo" />
					<img src={logotext} className="img-fluid my-4" alt="logo" />
					<p className="mt-5 pt-5 text-center">
						Apaxy V2 is a beautiful interface <code>Apache 2</code>
					</p>
					<p className="text-center">
						By{' '}
						<a
							className="App-link"
							href="https://fusengine.ch"
							target="_blank"
							rel="noopener noreferrer"
						>
							Fusengine
						</a>{' '}
					</p>
				</header>
				{/* ICONS GRID */}
				<IconsGrid />
				{/* PREVIEW */}
				<div className="container PageCenter" id="preview">
					<img src={preview} className="img-fluid my-4" alt="preview" />
					<p className="text-center">
						Preview of Apaxy V2 in a Docker Lab <code>localhost</code>
						<br />
						To enhance the experience of browsing web directories.<br />
						It uses the <code>mod_autoindex</code> Apache module and some<br />
						<code>CSS</code> to override the default style of a directory listing.
					</p>
				</div>
			</Fragment>
		)
	}
}
