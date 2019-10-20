import React, { Component, Fragment } from 'react'

/** Component */
import { Icon } from '../../components'

/** DB */
import { IconsDB } from 'db'

export default class IconsGrid extends Component {
	render() {
		return (
			<Fragment>
				<div className="container mx-auto">
					{/* ICONS GRID */}
					<div className="my-5" id="icons">
						{/* <p className="text-center mb-5">ICONS DESIGN</p> */}
						<div className="row align-items-end">
							{IconsDB.icons.map((icon, index) => (
								<div className="col-auto mx-auto">
									{/* Grid of all the icons */}
									<Icon
										image={require(`../../img/icons/${icon.image}`)}
										title={icon.title}
										key={index}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
}
