function changingNumbers (selector) {

    const number = document.querySelector(selector),
          numberTop = number.getBoundingClientRect().top;

    let start = +number.innerHTML,
        end = +number.dataset.max;

    window.addEventListener('scroll', function onScroll() {
        if (window.pageYOffset > numberTop - window.innerHeight / 1.2) {
            this.removeEventListener('scroll', onScroll);
            const interval = setInterval(() => {
                number.innerHTML = ++start;
                if (start == end) {
                    clearInterval(interval);
                    number.dataset.plus ? number.innerHTML += '+' : null;
                }
            }, number.dataset.speed);
        }
    });

}

export default changingNumbers;