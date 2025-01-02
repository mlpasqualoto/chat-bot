export async function getResponse(message) {
    const response = await fetch("http://localhost:5500/api/gemini", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            message: message
        }),
    });

    if (!response.ok) {
        throw new Error("Erro ao se comunicar com a API.");
    }

    const responseData = await response.json();
    return responseData.generatedText;
};
