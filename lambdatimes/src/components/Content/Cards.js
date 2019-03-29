import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = (props) => {
	return (
		<div className="cards-container">
			{/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
			{props.cards.map((card, index) => (
				<Card
					key={index}
					card={card}
					headline={card.headline}
					tab={card.tab}
					img={card.img}
					author={card.author}
				/>
			))}
		</div>
	);
};

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
	cards: PropTypes.arrayOf(
		PropTypes.shape({
			key: PropTypes.number,
			card: PropTypes.string,
			tab: PropTypes.string,
			img: PropTypes.string,
			author: PropTypes.string
		})
	)
};
export default Cards;
