import { getResponse } from "./src/req.js";

document.addEventListener("DOMContentLoaded", () => {
    const messagesContainer = document.getElementById("chat");
    const messageInput = document.getElementById("input");
    const sendButton = document.getElementById("btnSend");
  
    function formatText(text) {
      // Divide o texto nas quebras de linha simples
      const paragraphs = text.split("\n");
    
      // Cria um parágrafo para cada linha, com espaçamento entre eles
      return paragraphs
        .map((paragraph) => `<p style="white-space: pre-line;">${paragraph.trim()}</p>`)
        .join("");
    };   
  
    function addMessage(text, type) {
      const message = document.createElement("div");
      message.classList.add("message", type);
  
      // Verifica se é uma mensagem recebida para aplicar formatação
      if (type === "received") {
        message.innerHTML = formatText(text); // Usa innerHTML para suportar formatação
      } else {
        message.textContent = text;
      }
  
      messagesContainer.appendChild(message);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    sendButton.addEventListener("click", async () => {
      const text = messageInput.value.trim();
      if (text) {
        addMessage(text, "sent");
        messageInput.value = "";
  
        // Mensagem de carregamento
        addMessage("Gerando resposta...", "received");
  
        // Chamar a API com o texto do usuário
        const response = await getResponse(text);
  
        // Adicionar a resposta no chat
        addMessage(response, "received");
      }
    });
  
    messageInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        sendButton.click();
      }
    });
  });
  