function parallaxBlock (selector) {
    const block = document.querySelector(selector),
          margin = block.querySelectorAll('.mt-dynamic');

    window.addEventListener('scroll', () => {
        let distance = window.scrollY;
        block.style.transform = `translateY(${distance * 0.4}px)`;
        margin.forEach((item, i) => {
            item.style.marginTop = `${30-distance*0.07}px`;
            item.style.opacity = `${1-distance*0.008/(i+1)}`;
        });
    });

}

export default parallaxBlock;