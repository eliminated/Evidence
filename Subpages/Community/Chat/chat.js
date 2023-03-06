const chatLog = document.querySelector('.chat-log');
const chatForm = document.querySelector('.chat-form');
const chatInput = document.querySelector('.chat-form input');

function appendMessage(message, sender) {
  const messageElem = document.createElement('div');
  messageElem.classList.add('message');
  if (sender === 'user') {
    messageElem.classList.add('user');
  } else {
    messageElem.classList.add('other');
  }
  messageElem.innerHTML = message;
  chatLog.appendChild(messageElem);
  chatLog.scrollTop = chatLog.scrollHeight;
}

chatForm.addEventListener('submit', event => {
  event.preventDefault();
  sendMessage();
});

chatInput.addEventListener('keyup', event => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
  const message = chatInput.value.trim();
  if (message) {
    appendMessage(message, 'user');
    chatInput.value = '';
    // setTimeout(() => {
    //   appendMessage('I am a bot', 'bot');
    // }, 1000);
  }
}
