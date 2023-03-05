// Get the input and button elements
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// Get the message list element
const messageList = document.getElementById('message-list');

// Add a click event listener to the send button
sendButton.addEventListener('click', sendMessage);

// Add a keypress event listener to the message input
messageInput.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
        sendMessage();
    }
});

// Function to send a message
function sendMessage() {
    // Get the message from the input element
    const message = messageInput.value;

    // Create a new list item element to hold the message
    const messageItem = document.createElement('li');

    // Create a new paragraph element to hold the message text
    const messageText = document.createElement('p');
    messageText.innerText = message;

    // Add the message text element to the list item element
    messageItem.appendChild(messageText);

    // Add the list item element to the message list
    messageList.appendChild(messageItem);

    // Clear the message input
    messageInput.value = '';

    // Scroll to the bottom of the message list
    messageList.scrollTop = messageList.scrollHeight;
}