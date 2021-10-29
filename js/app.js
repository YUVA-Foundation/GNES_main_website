const chatButton = document.querySelector('.chatbox__button');
const chatContent = document.querySelector('.chatbox__support');
const chatCross = document.querySelector('.cross');
const icons = {
    isClicked: ' ',
    isNotClicked: ' ',
}
const chatbox = new InteractiveChatbox(chatButton, chatContent, chatCross, icons);
chatbox.display();
chatbox.toggleIcon(false, chatButton);
chatbox.toggleIcon(false,chatCross);