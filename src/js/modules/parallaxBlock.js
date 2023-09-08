function parallaxBlock (selector) {
    const block = document.querySelector(selector),
          margin = block.querySelectorAll('.mt-dynamic');

    window.addEventListener('scroll', () => {
        let distance = window.scrollY;
        block.style.transform = `translateY(${distance * 0.4}px)`;
        margin.forEach(item => {
            item.style.marginTop = `${30-distance*0.1}px`;
            item.style.opacity = `${1-distance*0.001}`;
        });
        console.log(distance);
    });

}

export default parallaxBlock;