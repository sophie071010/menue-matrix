// Switch between pages
function goToApp() {
    document.getElementById('landingPage').classList.remove('active');
    document.getElementById('landingPage').classList.add('hidden');
    
    document.getElementById('appPage').classList.remove('hidden');
    document.getElementById('appPage').classList.add('active');
}

function goToLanding() {
    document.getElementById('appPage').classList.remove('active');
    document.getElementById('appPage').classList.add('hidden');
    
    document.getElementById('landingPage').classList.remove('hidden');
    document.getElementById('landingPage').classList.add('active');
}

// Automatic Slideshow Logic
let slideIndex = 0;
function showSlides() {
    let slides = document.getElementsByClassName("slide");
    if (slides.length === 0) return;
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }    
    slides[slideIndex - 1].style.display = "block";  
    
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Start slideshow when page loads
window.onload = function() {
    showSlides();
};

// AI Meal Suggestion Logic
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
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AQ.Ab8RN6Lhzo2HxK0UeXoj8UlhiOaXCpqe7-7za--63STTmZHSqA',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: "You are an expert chef assistant. Provide creative, detailed meal recommendations or recipes based on user preferences and strict dietary restrictions." }]
          },
          contents: [{ parts: [{ text: userInput }] }]
        })
      }
    );

    const data = await response.json();

    if (data.error) {
      resultDiv.innerText = `API Error (${data.error.code}): ${data.error.message}`;
      return;
    }
    
    if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
      resultDiv.innerText = data.candidates[0].content.parts[0].text;
    } else {
      console.log('Full response structure:', data);
      resultDiv.innerText = 'Error: Response format was unexpected. Check Console.';
    }
  } catch (error) {
    console.error(error);
    resultDiv.innerText = 'Failed to connect. Check console for details.';
  }
}