import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5500;

app.use(cors());
app.use(express.json());

app.post('/api/gemini', async (req, res) => {
  const { message } = req.body;
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: message }],
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(
        "Erro ao se comunicar com a API: " + response.statusText
      );
    };

    const responseData = await response.json();
    const generatedText = responseData?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!generatedText) {
      throw new Error("A API não retornou uma resposta válida.");
    };

    res.json({ generatedText });

  } catch (error) {
    console.error("Erro:", error);
    return "Desculpe, houve um erro ao processar sua solicitação.";
  };
});

app.listen(PORT, () => {
  console.log(`Servidor está rodando em http://127.0.0.1:${PORT}`);
});
