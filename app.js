const apiKey = 'AQ.Ab8RN6KanbOk5Qjls92H4mtVAn6J8yXfobrMGGG4ex0N6y0siA'; // Replace this with your Gemini API key

async function getMealSuggestion() {
    const userPrompt = document.getElementById('userInput').value;
    const resultDiv = document.getElementById('result');

    if (!userPrompt) {
        resultDiv.innerText = 'Please enter a craving or preference first!';
        return;
    }

    resultDiv.innerText = 'Thinking of the perfect meal...';

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: `Suggest a single specific meal idea for an indecisive person based on these notes: ${userPrompt}. Include a 2-sentence description and why it fits.` }] }]
            })
        });

        const data = await response.json();
        const suggestion = data.candidates[0].content.parts[0].text;
        resultDiv.innerText = suggestion;
    } catch (error) {
        resultDiv.innerText = 'Error generating suggestion. Check your API key!';
    }
}