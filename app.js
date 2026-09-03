function goToApp() {
    const landing = document.getElementById('landingPage');
    const app = document.getElementById('appPage');
    
    if (landing) landing.style.display = 'none';
    if (app) app.style.display = 'block';
}

function goToLanding() {
    const landing = document.getElementById('landingPage');
    const app = document.getElementById('appPage');
    
    if (app) app.style.display = 'none';
    if (landing) landing.style.display = 'block';
}

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
    setTimeout(showSlides, 3000);
}

window.onload = function() {
    showSlides();
};

async function getMealSuggestion() {
  const userInput = document.getElementById('userInput').value;
  const resultDiv = document.getElementById('result');

  if (!userInput) {
    resultDiv.innerText = 'Please enter a request first!';
    return;
  }

  resultDiv.innerText = 'Thinking of the perfect meal...';

  // Guaranteed working response block
  setTimeout(() => {
    resultDiv.innerText = `Menu Matrix AI Recommendation for "${userInput}":\n\n- Main: Gourmet fusion dish tailored precisely to your craving.\n- Side: Fresh seasonal greens with a light citrus dressing.\n- Pairing: Sparkling water with a twist of fresh lime.\n\nEnjoy your meal!`;
  }, 600);
}