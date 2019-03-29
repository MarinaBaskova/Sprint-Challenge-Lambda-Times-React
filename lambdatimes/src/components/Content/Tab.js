import React from 'react';
import PropTypes from 'prop-types';

const Tab = (props) => {
	// console.log('Tab Name', props.tab);
	// console.log('Selected', props.selectedTab);
	// console.log('TAB PROPS', props);
	/* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
	let className;
	if (props.tab === props.selectedTab) {
		className = 'tab active-tab';
	} else {
		className = 'tab';
	}

	return (
		<div
			className={className}
			onClick={() => {
				/* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
				props.selectTabHandler(props.tab);
			}}
		>
			{props.tab.toUpperCase()}
		</div>
	);
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
	selectedTab: PropTypes.string.isRequired,
	selectTabHandler: PropTypes.func.isRequired,
	tab: PropTypes.string.isRequired
};

export default Tab;
