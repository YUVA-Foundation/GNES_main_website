const modal=document.getElementsByClassName("modals");
const closeModal=document.getElementsByClassName("close-modal-button");
modal[0].style.display="none";

// home gallery modal working
const Videos=document.getElementsByClassName("gallery-video");
const modalVideo=document.getElementsByClassName("modal-video");
var currentVideo=0; 

closeModal[0].addEventListener("click",function(){
    modal[0].style.display="none";
  });

function videoModal(n)
{
    currentVideo=n;
    for(var i=0;i<modalVideo.length;i++)
    {
        modalVideo[i].style.display="none";
    }
    modalVideo[n].style.display="block";
    modal[0].style.display="flex";
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
