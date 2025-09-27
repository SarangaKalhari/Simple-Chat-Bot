
const API_KEY = "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";

  const messagesContainer = document.getElementById("chat-body");
  const inputField = document.getElementById("user-input");
  const sendBtn = document.getElementById("send");

  sendBtn.addEventListener("click", sendMessage);
  inputField.addEventListener("keypress", e => { if (e.key === "Enter") sendMessage(); });

  function addMessage(text, sender) {
    const msg = document.createElement("div");
    msg.classList.add("message", sender);
    msg.textContent = text;
    messagesContainer.appendChild(msg);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    return msg;
  }
