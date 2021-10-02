let event_slider_left=document.getElementById("event-decrease");
let event_slider_right=document.getElementById("event-increase");
let eventImages=document.getElementsByClassName("event-card");
let eventcounter=0;


let highlight_slider_left=document.getElementById("highlight-decrease");
let highlight_slider_right=document.getElementById("highlight-increase");
let highlightImages=document.getElementsByClassName("highlight-card");
let highlightCounter=0;

let testimonial_slider_left=document.getElementById("testimonial-decrease");
let testimonial_slider_right=document.getElementById("testimonial-increase");
let testimonialImages=document.getElementsByClassName("t-card");
let testimonialCounter=0;

// ************************************************* EVENT CAROUSEL ***************************************

function eventCarousel(n)
{
    if(n<0)
    {
        n=eventImages.length-1;
        eventcounter=eventImages.length-1;
    }
    if(n>=eventImages.length)
    {
        n=0;
        eventcounter=0;
    }
    for(let i=0;i<eventImages.length;i++)
    {
        eventImages[i].style.display="none";
    }
    eventImages[n].style.display="block";
}

eventCarousel(eventcounter);
setInterval(function()
{
    eventCarousel(++eventcounter);
},8000);
event_slider_left.addEventListener("click",function(){
    eventCarousel(--eventcounter);
});
event_slider_right.addEventListener("click",function(){
    eventCarousel(++eventcounter);
});


// ************************************************* HIGHLIGHT CAROUSEL ***************************************
function highlightCarousel(n)
{
    if(n<0)
    {
        n=highlightImages.length-1;
        highlightCounter=eventImages.length-1;
    }
    if(n>=highlightImages.length)
    {
        n=0;
        highlightCounter=0;
    }
    for(let i=0;i<highlightImages.length;i++)
    {
        highlightImages[i].style.display="none";
    }
    highlightImages[n].style.display="block";
}

highlightCarousel(highlightCounter);
setInterval(function()
{
    highlightCarousel(++highlightCounter);
},8000);
highlight_slider_left.addEventListener("click",function(){
    highlightCarousel(--highlightCounter);
});
highlight_slider_right.addEventListener("click",function(){
    highlightCarousel(++highlightCounter);
});

// ************************************************* TESTIMONIAL CAROUSEL ***************************************

function testimonialCarouselIncrease(first,second,third)
{
    console.log(first,second,third);
    if(first===testimonialImages.length-3)
    {
        testimonial_slider_right.style.pointerEvents="none";
        testimonial_slider_right.style.backgroundColor="grey";
    }

    for(let i=0;i<testimonialImages.length;i++)
    {
        testimonialImages[i].style.display="none";
    }

    testimonialImages[first].style.display="flex";
    testimonialImages[second].style.display="flex";
    testimonialImages[third].style.display="flex";
}
function testimonialCarouselDecrease(first,second,third)
{
    console.log(first,second,third);
    if(first===0)
    {
        testimonial_slider_left.style.pointerEvents="none";
        testimonial_slider_left.style.backgroundColor="grey";
    }

    for(let i=0;i<testimonialImages.length;i++)
    {
        testimonialImages[i].style.display="none";
    }

    testimonialImages[first].style.display="flex";
    testimonialImages[second].style.display="flex";
    testimonialImages[third].style.display="flex";
}

testimonialCarouselIncrease(testimonialCounter,testimonialCounter+1,testimonialCounter+2);

testimonial_slider_right.addEventListener("click",function()
{
    testimonial_slider_left.style.pointerEvents="all";
    testimonial_slider_left.style.backgroundColor="#334756";
    testimonialCarouselIncrease(++testimonialCounter,testimonialCounter+1,testimonialCounter+2);
});
testimonial_slider_left.addEventListener("click",function()
{
    testimonial_slider_right.style.pointerEvents="all";
    testimonial_slider_right.style.backgroundColor="#334756";
    testimonialCarouselDecrease(--testimonialCounter,testimonialCounter+1,testimonialCounter+2);
});

// Achievers carousel

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        750:{
            items:2
        },
        1025:{
            items:3
        }
    }
})