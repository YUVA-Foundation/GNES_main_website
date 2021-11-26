document.addEventListener("DOMContentLoaded", function(){
    // make it as accordion for smaller screens
    if (window.innerWidth > 992) {
    
        document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
    
            everyitem.addEventListener('mouseover', function(e){
    
                let el_link = this.querySelector('a[data-bs-toggle]');
    
                if(el_link != null){
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.add('show');
                    nextEl.classList.add('show');
                }
    
            });
            everyitem.addEventListener('mouseleave', function(e){
                let el_link = this.querySelector('a[data-bs-toggle]');
    
                if(el_link != null){
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.remove('show');
                    nextEl.classList.remove('show');
                }
    
    
            })
        });
    
    }
    // end if innerWidth
    }); 
    // DOMContentLoaded  end

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

// Achievers carousel

$('.testm').owlCarousel({
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
        1024:{
            items:3
        }
    }
})

$('.partners').owlCarousel({
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