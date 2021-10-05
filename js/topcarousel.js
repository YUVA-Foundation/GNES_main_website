const responsive={
    1040:{
        items:1
    },
    640:{
        items:1
    },
    0:{
        items:1
    }
}

$('.slidet').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:responsive
});