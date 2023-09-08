import WOW from 'wow.js';

import highlightMenuObjects from './modules/highlightMenuObjects';
import glideSliders from './modules/glideSliders';
import changingNumbers from './modules/changingNumbers';
import modals from './modules/modals';
import checkboxValidation from './modules/checkboxValidation';
import parallaxBlock from './modules/parallaxBlock';

window.addEventListener('DOMContentLoaded', () => {

	//Menu: static/dynamic 
	const headerBlock = document.getElementById('header');

	window.onscroll = function () {
		if (window.pageYOffset>50) {
			headerBlock.style.backgroundColor = 'var(--header-bg)';
		} else {
			headerBlock.style.backgroundColor = 'rgba(0,0,0,0)';
		}
	};

    //WoW.js
	const wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 100,
		mobile: true,  
		live: true,
	});
	wow.init();

	try {
		glideSliders();
	} catch(e) {}

	highlightMenuObjects('.menu__item__link', 'menu__item__link_active');
	
	try {
		changingNumbers('.number-1');
		changingNumbers('.number-2');
		changingNumbers('.number-3');
		changingNumbers('.number-4');
	} catch(e) {}

	modals();
	checkboxValidation();
	
	try {
		parallaxBlock('.promo__content');
	} catch(e) {}
});