// script.js
document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput === '') return;

    // Display user message
    displayMessage(userInput, 'user');

    // Generate bot response
    const botResponse = getBotResponse(userInput);
    displayMessage(botResponse, 'bot');

    // Clear input
    document.getElementById('user-input').value = '';
}

function displayMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.innerHTML = `<p>${message}</p>`;
    chatBox.appendChild(messageElement);

    // Scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userInput) {
    userInput = userInput.toLowerCase();

    if (userInput.includes('hello') || userInput.includes('hi')) {
        return 'Hello! How can I help you?';
    } else if (userInput.includes('how are you')) {
        return 'I am just a bot, but I am doing great! How about you?';
    } else if (userInput.includes('bye')) {
        return 'Goodbye! Have a great day!';
    } else if (userInput.includes('your name')) {
        return 'I am a simple chatbot.';
    } else if (userInput.includes('help')) {
        return 'I can help you with basic questions. Just ask!';
    } else {
        return 'I am not sure how to respond to that.';
    }
}