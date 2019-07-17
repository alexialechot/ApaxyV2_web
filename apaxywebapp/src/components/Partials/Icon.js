import React, { Fragment } from 'react'

const Icon = ({ image, title }) => {
	return (
		<Fragment>
			<div className="col text-center my-3" id="icon">
				<img className="mx-auto d-block my-3" src={image} alt={image} />
				<h4 className="text-center mt-2">{title}</h4>
			</div>
		</Fragment>
	)
}
export default Icon
