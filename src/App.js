import React, { Component } from 'react'
import shuffle from 'lodash.shuffle'

import GuessCount from './GuessCount'
import HallOfFame, {FAKE_HOF} from './HallOfFame'
import Card from './Card'
import './App.css'


const SIDE = 6
const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'

class App extends Component {
	cards = this.generateCards()

	handleCardClick(card){
		console.log(card, 'clicked')
	}

	generateCards() {
		const result = []
		const size = SIDE * SIDE
		const candidates = shuffle(SYMBOLS)
		while (result.length < size) {
		  const card = candidates.pop()
		  result.push(card, card)
		}
		console.log(result)
		return shuffle(result)
	}

	render() {
		const won = new Date().getSeconds() % 2 === 0
		return (
			<div className="memory">
				<GuessCount guesses={0} />
				{this.cards.map((card, index) => (
					<Card card={card} feedback="visible" onClick={this.handleCardClick} key={index} />
				))}
				{won && <HallOfFame entries={FAKE_HOF} />}
			</div>
		)
	}
}

export default App