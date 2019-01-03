import PropTypes from 'prop-types'
import React from 'react'

import './Card.css'

const HIDDEN_SYMBOL = '❓'

const Card = ({card, feedback, onClick}) => (
	<div className={`card ${feedback}`} onClick={() => onClick(card)}>
		<span className="symbol">
			{feedback === 'hidden' ? HIDDEN_SYMBOL : card}
		</span>
	</div>
)

Card.propTypes = {
	card : PropTypes.string.isRequired,
	onClick : PropTypes.func.isRequired,
	feedback : PropTypes.oneOf([
		'visible',
		'hidden',
		'justMatched',
		'justMismatched'
	]).isRequired
}

export default Card