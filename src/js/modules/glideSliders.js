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


    // const pricesSlider = new Glide('.prices', {
    //     type: 'carousel',		
    //     startAt: 0,
    //     perView: 3,
    //     gap: -30,
    //     breakpoints: {
    //         767: {
    //             perView: 2,
    //             gap: -70,
    //         },
    //         575: {
    //             perView: 1,
    //             gap: -250,
    //         },
    //         512: {
    //             perView: 1,
    //             gap: -180,
    //         },
    //         440: {
    //             perView: 1,
    //             gap: -100,
    //         },
    //         360: {
    //             perView: 1,
    //             gap: -70,
    //         },
    //         320: {
    //             perView: 1,
    //             gap: -50,
    //         }
    //     },
    //     autoplay: 5000,
    //     hoverpause: true,
    //     focusAt: 'center',
    //     animationTimingFunc: 'ease-in-out',
    //     animationDuration: 500,
    // });
    // pricesSlider.mount();

}

export default glideSliders;