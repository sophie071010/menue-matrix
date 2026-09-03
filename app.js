async function getMealSuggestion() {
  const userInput = document.getElementById('userInput').value;
  const resultDiv = document.getElementById('result');

  if (!userInput) {
    resultDiv.innerText = 'Please enter a request first!';
    return;
  }

  resultDiv.innerText = 'Thinking of the perfect meal...';

  try {
    const response = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AQ.Ab8RN6JinWmoZWk3Nh5qnBFScxxHg1IsaUtI67RKYeXfTvWSMQ',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: userInput }] }]
        })
      }
    );

    const data = await response.json();
    
    if (data.candidates && data.candidates[0].content.parts[0].text) {
      resultDiv.innerText = data.candidates[0].content.parts[0].text;
    } else {
      resultDiv.innerText = 'Error generating recipe. Please try again.';
    }
  } catch (error) {
    console.error(error);
    resultDiv.innerText = 'Failed to connect. Check console for details.';
  }
}