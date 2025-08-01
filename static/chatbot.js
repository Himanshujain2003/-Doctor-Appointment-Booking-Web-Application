function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    
    if (userInput !== '') {
      appendUserMessage(userInput);
      generateBotReply(userInput);
      document.getElementById('user-input').value = '';
    }
  }
  
  function appendUserMessage(message) {
    var chatContainer = document.querySelector('.chatbot-container');
    var userMessageElement = document.createElement('div');
    userMessageElement.classList.add('user-message');
    userMessageElement.textContent = message;
    chatContainer.appendChild(userMessageElement);
  }
  
  function appendBotMessage(message) {
    var chatContainer = document.querySelector('.chatbot-container');
    var botMessageElement = document.createElement('div');
    botMessageElement.classList.add('bot-message');
    botMessageElement.textContent = message;
    chatContainer.appendChild(botMessageElement);
  }
  
  function generateBotReply(userInput) {
    var botReply = "I'm sorry, I cannot process your request at the moment.";
    
    appendBotMessage(botReply);
    
    var chatContainer = document.querySelector('.chatbot-container');
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }
  