import Glide from '@glidejs/glide';

function glideSliders () {
    const partnersSlider = new Glide('.partners', {
        type: 'carousel',		
        startAt: 0,
        perView: 5,
        gap: 10,
        breakpoints: {
            1199: {
                perView: 5,
                gap: 5,
            },
            991: {
                perView: 3,
                gap: 10,
            },
            767: {
                perView: 3,
                gap: 5,
            },
            575: {
                perView: 1,
                gap: -80,
            },
        },
        autoplay: 5000,
        hoverpause: false,
        focusAt: 'center',
        animationTimingFunc: 'ease-in-out',
        animationDuration: 1000,
    });
    partnersSlider.mount();

}

export default glideSliders;