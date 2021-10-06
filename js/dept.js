const responsive={
    1040:{
        items:3
    },
    640:{
        items:2
    },
    0:{
        items:1
    }
}

$('.achm').owlCarousel({
    loop:true,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:responsive
});

const responsives={
    1040:{
        items:3
    },
    640:{
        items:2
    },
    0:{
        items:1
    }
}

$('.faculty').owlCarousel({
    loop:true,
    margin:100,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:responsives
});