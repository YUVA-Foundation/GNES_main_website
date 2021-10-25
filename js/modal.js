const videoGallery=document.getElementById("video-gallery");
const imageGallery=document.getElementById("image-gallery");
const imageButton=document.getElementById("image-button");
const videoButton=document.getElementById("video-button");
videoGallery.style.display="none";

function callImages(){
    imageButton.classList.add("active");
    videoButton.classList.remove("active");
    videoGallery.style.display="none";
    imageGallery.style.display="flex";
}

function callVideos(){
    imageButton.classList.remove("active");
    videoButton.classList.add("active");
    videoGallery.style.display="flex";
    imageGallery.style.display="none"; 
}

const modal=document.getElementsByClassName("modals");
const closeModal=document.getElementsByClassName("close-modal-button");
const Images=document.getElementsByClassName("gallery-image");
const modalImage=document.getElementById("modal-img");
var currentImage=0;
modal[0].style.display="none";
modal[1].style.display="none";


// image modal working
closeModal[0].addEventListener("click",function(){
  modal[0].style.display="none";
});

function imageModal(n)
{
  currentImage=n;
  const currentImageSrc=Images[n].src;
  modalImage.src=currentImageSrc;
  modal[0].style.display="flex";
}

function NavigateImages(x){
  currentImage+=x;
  if(currentImage>=Images.length)
  {
    currentImage=0;
  }
  if(currentImage<0)
  {
    currentImage=Images.length-1;
  }
  modalImage.src=Images[currentImage].src;
}

// video modal working
const Videos=document.getElementsByClassName("gallery-video");
const modalVideo=document.getElementsByClassName("modal-video");
var currentVideo=0; 

closeModal[1].addEventListener("click",function(){
    modal[1].style.display="none";
  });

function videoModal(n)
{
    currentVideo=n;
    for(var i=0;i<modalVideo.length;i++)
    {
        modalVideo[i].style.display="none";
    }
    modalVideo[n].style.display="block";
    modal[1].style.display="flex";
} 

function NavigateVideo(y)
{
    currentVideo+=y;
  if(currentVideo>=Videos.length)
  {
    currentVideo=0;
  }
  if(currentVideo<0)
  {
    currentVideo=Videos.length-1;
  }
  for(var a=0;a<modalVideo.length;a++)
  {
      modalVideo[a].style.display="none";
  }
  modalVideo[currentVideo].style.display="block";
}
