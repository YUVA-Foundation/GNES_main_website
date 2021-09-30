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

$('.faculty-card').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:responsive
});