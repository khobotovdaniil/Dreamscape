import WOW from 'wow.js';

import highlightMenuObjects from './modules/highlightMenuObjects';
import glideSliders from './modules/glideSliders';
import changingNumbers from './modules/changingNumbers';
import modals from './modules/modals';

window.addEventListener('DOMContentLoaded', () => {

		//Menu: static/dynamic 
		const headerBlock = document.getElementById('header');

		window.onscroll = function () {
			if (window.pageYOffset>90) {
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

	changingNumbers('.number-0', 80);
	changingNumbers('.number-1', 5);
	changingNumbers('.number-2', 150);
	changingNumbers('.number-3', 50);

	modals();
});