// Simple smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  /* chatbot*/ 
  function toggleChatbot() {
    const bot = document.getElementById("chatbot");
    bot.style.display = bot.style.display === "flex" ? "none" : "flex";
  }
  
  function sendMessage(messageFromButton = null) {
    const input = document.getElementById("userInput");
    const chatBody = document.getElementById("chat-body");
  
    const message = messageFromButton || input.value.trim();
    if (!message) return;
  
    // User Message Show
    const userMsg = document.createElement("div");
    userMsg.className = "user-msg";
    userMsg.innerText = message;
    chatBody.appendChild(userMsg);
  
    input.value = "";
  
    // Typing Animation
    const botTyping = document.createElement("div");
    botTyping.className = "bot-msg typing";
    botTyping.innerText = "Typing...";
    chatBody.appendChild(botTyping);
  
    chatBody.scrollTop = chatBody.scrollHeight;
  
    setTimeout(() => {
      botTyping.remove(); // Remove typing
      const replyText = getBotReply(message.toLowerCase());
  
      const botReply = document.createElement("div");
      botReply.className = "bot-msg";
      botReply.innerText = replyText;
      chatBody.appendChild(botReply);
  
      // Voice reply
      speak(replyText);
  
      chatBody.scrollTop = chatBody.scrollHeight;
    }, 1200);
  }
  
  function handleKey(event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  }
  
  function getBotReply(msg) {
    if (msg.includes("brightlant") || msg.includes("company")) {
      return "BrightLant is a modern IT company providing website and app development services.";
    } else if (msg.includes("services") || msg.includes("offer")) {
      return "We offer Web Development, App Development, UI/UX Design, and Software Solutions.";
    } else if (msg.includes("contact") || msg.includes("reach")) {
      return "You can contact us via email at brightlantofficial@gmail.com or call us at +91-8097618731.";
    } else if (msg.includes("location") || msg.includes("office")) {
      return "Our office is located in Mumbai, India.";
    } else if (msg.includes("projects") || msg.includes("portfolio")) {
      return "We have successfully delivered projects in education, e-commerce, and healthcare sectors.";
    } else if (msg.includes("founder") || msg.includes("ceo")) {
      return "BrightLant was founded by John Doe, an experienced tech entrepreneur.";
    } else if (msg.includes("pricing") || msg.includes("cost")) {
      return "Our pricing depends on the project scope. Please contact us for a detailed quote.";
    } else {
      return "Sorry, I didn't understand your question. Could you please rephrase?";
    }
  }
  
  // Voice message function
  function speak(text) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.lang = "en-US";
    speech.rate = 1; // speaking speed
    window.speechSynthesis.speak(speech);
  }
  
  // Suggestion button click
  function sendSuggestion(msg) {
    sendMessage(msg);
  }
  
  

/*toggle */


// Scroll Reveal Animation
window.addEventListener('scroll', reveal);

function reveal() {
  const reveals = document.querySelectorAll('.reveal');
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}
