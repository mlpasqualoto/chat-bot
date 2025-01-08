# ChatBot  
Este é um aplicativo de chat desenvolvido em HTML, CSS e JavaScript, que utiliza um servidor Node.js com Express para interagir com uma API externa de geração de texto baseada em inteligência artificial. O usuário pode enviar mensagens para o chatbot e receber respostas geradas automaticamente.  

---

## 📸 Capturas de Tela  
### Desktop  
![exemplo](https://github.com/user-attachments/assets/33dec4fe-efdb-408f-b64c-bd98a737d2c0)
  

### Mobile  
![mobile](https://github.com/user-attachments/assets/aa1e6264-cdf9-4797-8746-6c54ae3aabb1)
 

---

## ✨ Funcionalidades  
- **Envio de Mensagens:** O usuário pode digitar mensagens em um campo de entrada e enviá-las para o chatbot clicando no botão ou pressionando Enter.  
- **Respostas Automáticas:** As mensagens do usuário são enviadas para o servidor, que processa e retorna respostas geradas pela API Gemini.  
- **Interface Responsiva:** O layout é adaptável para dispositivos desktop e móveis, garantindo uma experiência consistente e acessível.  
- **Estilização Personalizada:** Inclui barra de rolagem estilizada para melhor usabilidade e design moderno.  

---

## 🛠 Tecnologias Utilizadas  
### Frontend:  
- **HTML5:** Estrutura básica da interface.  
- **CSS3:** Estilização responsiva e moderna, com efeitos como barras de rolagem personalizadas.  
- **JavaScript:** Interações do cliente, como envio de mensagens e manipulação da interface.  

### Backend:  
- **Node.js com Express:** Configuração do servidor para receber e processar as mensagens enviadas pelo cliente.  
- **Fetch API:** Comunicação entre o servidor e a API externa.  

### API:  
- **Gemini:** Modelo de geração de texto baseado em inteligência artificial.  

---

## 📂 Estrutura do Código  
### **HTML**  
Estrutura da interface, incluindo:  
- Cabeçalho com o título do chatbot.  
- Área de mensagens (chat) para exibir as interações.  
- Campo de entrada de texto e botão de envio.  

### **CSS**  
Estilos responsivos e modernos, como:  
- Barra de rolagem personalizada.  
- Design adaptável para diferentes tamanhos de tela.  
- Estilização de mensagens enviadas e recebidas com diferenciação visual.  

### **JavaScript (Frontend)**  
- **main.js:**  
  - `addMessage(text, type)`: Adiciona mensagens ao chat, diferenciando entre enviadas e recebidas.  
  - `formatText(text)`: Formata o texto das mensagens recebidas para permitir quebras de linha.  
  - Event listeners para enviar mensagens e processar a entrada do teclado.  

### **Node.js (Backend)**  
- **server.js:** Configuração do servidor Express para interagir com a API Gemini e processar mensagens enviadas pelo cliente.  
- **routes/routes.js:** Define as rotas para as interações da API.  

---

## ⚙️ Configuração do Projeto  
1. **Clone o repositório:**  
   ```bash  
   git clone <url-do-repositorio>  
   cd chatbot  
2. **Instale as dependências:**
   ```bash
   npm install  
3. **Configuração de Variáveis de Ambiente:**
   
   Crie um arquivo .env na raiz do projeto e adicione a chave de API:
   ```bash
   GEMINI_API_KEY=<sua_chave_da_api_gemini>
5. **Execute o servidor:**
   ```bash
   node server.js  
6. **Abra o arquivo HTML:**
   Abra o arquivo index.html no navegador para usar o chatbot.

---

## 🔍 Exemplo de Uso
1. **Digite uma mensagem no campo de entrada e pressione Enter ou clique no botão de envio.**
2. **A mensagem será exibida na interface como "enviada".**
3. **O chatbot processará a mensagem e exibirá uma resposta "recebida".**

---

## 🤝 Contribuições

Contribuições são bem-vindas! Caso encontre algum problema ou tenha sugestões, fique à vontade para abrir uma issue ou enviar um pull request.

---

## 📜 Licença

Este projeto está licenciado sob a licença MIT.

