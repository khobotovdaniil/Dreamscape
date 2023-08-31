function highlightMenuObjects(selector, active) {
    const getId = (link) => link.getAttribute('href').replace('#', '');
	
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                document.querySelectorAll(selector).forEach((link) => {
                    link.classList.toggle(active,
                    getId(link) === entry.target.id
                    );
                });
            }
        });
    }, {
        threshold: 0.5,
    });

    document.querySelectorAll('section').forEach((section) => {
        sectionObserver.observe(section);
    });
}

export default highlightMenuObjects;