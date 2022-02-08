"use strict";
let btn = document.querySelector('.btn');

let messagesWrapper = document.querySelector('.messages');

let textComment = document.querySelector(".comment-sender");

let spam = ['xxx', 'viagra'];

let chat = []; 

btn.addEventListener('click',send);

function checkSpam(message) {
    message = message.toLowerCase();
    
    let newMessage = message;

    for ( let i = 0; i < spam.length; i++) {
        if (message.includes(spam[i])) {
            newMessage = newMessage.replaceAll(spam[i], '***');
        }
    }
    
    return newMessage;
}

function send() {
    chat.push(checkSpam(textComment.value));
    console.log(chat)

    render();
}

function render () {
    messagesWrapper.innerHTML = '';
    textComment.value = "";

    for ( let i = 0; i < chat.length; i++) {
        const block = document.createElement('div');   
        block.textContent = chat[i];

        messagesWrapper.appendChild(block);
    }
}