import WOW from 'wow.js';
import glideSliders from './modules/glideSliders';
import highlightMenuObjects from './modules/highlightMenuObjects';

window.addEventListener('DOMContentLoaded', () => {

		//Menu: static/dynamic 
		const headerBlock = document.getElementById('header');

		window.onscroll = function () {
			if (window.pageYOffset>90) {
				headerBlock.style.backgroundColor = 'var(--header-bg)';
			} else {
				headerBlock.style.backgroundColor = 'rgba(0,0,0,0)';
			}
		};backgroundColor

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
});