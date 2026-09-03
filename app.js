const iKey = 'AQ.Ab8RN6KVuxAH4HMQjpg-oOsOqPXp9yOVugGtWygtCp6w_xqvDA'; // Replace this with your Gemini I key

async function getMealSuggestion() {
    const userPrompt = document.getElementById('userInput').value;
    const resultDiv = document.getElementById('result');

    if (!userPrompt) {
        resultDiv.innerText = 'Please enter a craving or preference first!';
        return;
    }

    resultDiv.innerText = 'Thinking of the perfect meal...';

    try {
        const response = await fetch(`https://generativelanguage.googleis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${iKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'plication/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: `Suggest a single specific meal idea for an indecisive person based on these notes: ${userPrompt}. Include a 2-sentence description and why it fits.` }] }]
            })
        });

        const data = await response.json();
        const suggestion = data.candidates[0].content.parts[0].text;
        resultDiv.innerText = suggestion;
    } catch (error) {
        resultDiv.innerText = 'Error generating suggestion. Check your I key!';
    }
}