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
  const userInput = document.getElementById('userInput').value.trim();
  const resultDiv = document.getElementById('result');

  if (!userInput) {
    resultDiv.innerText = 'Please enter what you are craving or trying to avoid first!';
    return;
  }

  resultDiv.innerText = 'Matrix synthesizing your custom request...';

  setTimeout(() => {
    const query = userInput.toLowerCase();
    let recs = "";
    let notes = [];

    // 1. Independent Negative Exclusions Check
    if (query.includes('no veggies') || query.includes('no vegetables') || query.includes('no green')) {
      notes.push("🥩🚫 Meat/Carnivore focus (No veggies).");
    }
    if (query.includes('no meat') || query.includes('no poultry') || query.includes('meatless')) {
      notes.push("🌱🚫 Meat-free.");
    }
    if (query.includes('no seafood') || query.includes('no fish')) {
      notes.push("🐟🚫 Land-based options only (No seafood).");
    }
    if (query.includes('no dairy') || query.includes('lactose free')) {
      notes.push("🥛🚫 Dairy-free.");
    }

    // 2. Independent Dietary & Allergy Check
    if (query.includes('nut allergy') || query.includes('peanut allergy') || query.includes('no nuts')) {
      notes.push("🥜⚠️ 100% Nut-Free safe kitchen.");
    }
    if (query.includes('vegan') || query.includes('plant-based')) {
      notes.push("🌿 100% Plant-Based / Vegan.");
    } else if (query.includes('vegetarian')) {
      notes.push("🧀 Vegetarian.");
    }
    if (query.includes('gluten-free') || query.includes('celiac') || query.includes('gluten')) {
      notes.push("⚠️ Gluten-Free safe prep.");
    }
    if (query.includes('halal')) {
      notes.push("🌙 Certified Halal.");
    }
    if (query.includes('keto') || query.includes('low-carb')) {
      notes.push("🥑 Keto & Low-Carb friendly.");
    }

    // 3. Independent Cuisine Matcher (Triggers based on what style you want, regardless of your filters)
    if (query.includes('asian') || query.includes('sushi') || query.includes('noodles') || query.includes('chinese') || query.includes('thai') || query.includes('ramen') || query.includes('dumpling')) {
      recs = "1. Sakura Street Bistro - Top-rated for custom dietary adjustments and authentic flavors.\n2. Golden Wok & Grill - Famous for flexible ingredient swaps and great signature dishes.\n3. Zen Garden Kitchen - Excellent customizable menu items matching your criteria.";
    } else if (query.includes('italian') || query.includes('pizza') || query.includes('pasta') || query.includes('risotto')) {
      recs = "1. Bella Italia Trattoria - Handcrafted options with customizable allergy-safe substitutions.\n2. Luigi's Slice Shop - Quick modifications available for specific dietary needs.\n3. Crust & Basil - Cozy ambiance with flexible Italian classics.";
    } else if (query.includes('mexican') || query.includes('tacos') || query.includes('burrito') || query.includes('quesadilla') || query.includes('nachos')) {
      recs = "1. El Camino Taqueria - Highly adaptable street food with fresh build-your-own options.\n2. Baja Cantina - Vibrant atmosphere with customizable fillings.\n3. Casa Fiesta - Family-run spot great for modifying dishes to your exact diet.";
    } else if (query.includes('indian') || query.includes('curry') || query.includes('biryani') || query.includes('naan') || query.includes('masala')) {
      recs = "1. Taj Palace Spice - Rich flavors with clear labeling for vegan, nut-free, and halal options.\n2. Mumbai Express - Fast adjustments for dietary restrictions.\n3. Saffron Kitchen - Modern dining with a menu built for custom preferences.";
    } else if (query.includes('mediterranean') || query.includes('greek') || query.includes('hummus') || query.includes('gyro') || query.includes('falafel')) {
      recs = "1. Athens Ouzeria - Naturally flexible plates for plant-based or allergy-conscious eaters.\n2. Olive & Lemon Tavern - Wood-grilled options tailored to what you want to exclude.\n3. Aegean Breeze - Fresh ingredients that easily adapt to your requests.";
    } else if (query.includes('burger') || query.includes('fast food') || query.includes('fries') || query.includes('american') || query.includes('wings')) {
      recs = "1. Smash House Burgers - Custom build stations to avoid any unwanted ingredients.\n2. The Daily Grill - Gourmet options with alternative buns and toppings.\n3. Urban Bite - Flexible fast-casual setup for specialized orders.";
    } else if (query.includes('breakfast') || query.includes('brunch') || query.includes('coffee') || query.includes('cafe') || query.includes('pancakes')) {
      recs = "1. Morning Glory Cafe - Wide variety of customizable morning plates.\n2. The Early Bird - Accommodating kitchen for custom dietary modifications.\n3. Sunnyside Bistro - Great flexibility for substitutions.";
    } else if (query.includes('japanese') || query.includes('sashimi') || query.includes('teriyaki') || query.includes('bento')) {
      recs = "1. Tokyo Roll House - Clean prep stations suitable for customized rolls.\n2. Osaka Bento Box Co. - Build-your-own bento flexibility.\n3. Hibachi Express - Interactive cooking that works around your restrictions.";
    } else if (query.includes('dessert') || query.includes('sweet') || query.includes('ice cream') || query.includes('cake') || query.includes('sugar')) {
      recs = "1. Sweet Tooth Parlor - Offers alternative bases for specialized diets.\n2. Sugar & Spice Bakery - Rotating selection of allergy-conscious treats.\n3. The Chocoholic Bar - Custom dessert pairings.";
    } else if (query.includes('bbq') || query.includes('barbecue') || query.includes('ribs') || query.includes('brisket')) {
      recs = "1. Smokehouse Junction - Smoked meats with customizable sauces and sides.\n2. Southern Pit BBQ - Flexible platters.\n3. Backyard Flame - Accommodating kitchen for specific requests.";
    } else if (query.includes('seafood') || query.includes('fish') || query.includes('shrimp') || query.includes('crab') || query.includes('lobster')) {
      recs = "1. Ocean Catch Bar & Grill - Fresh catches with customizable preparations.\n2. Coastal Pier Seafood - Safe handling for specific requests.\n3. The Lobster Shack - Premium coastal dining with flexible options.";
    } else {
      recs = `1. The Local Spot - Highly adaptable menu built for complex custom requests.\n2. Chef's Corner - Excellent kitchen staff happy to work around your specific combination.\n3. Fresh & Fast Bistro - Versatile options for unique cravings.`;
    }

    // Assemble output dynamically
    let finalOutput = `Menu Matrix Custom Analysis for "${userInput}":\n\n`;
    if (notes.length > 0) {
      finalOutput += `Applied Filters:\n` + notes.join('\n') + `\n\n`;
    }
    finalOutput += `Recommended Spots:\n${recs}\n\nGrab a table or order safely!`;

    resultDiv.innerText = finalOutput;
  }, 600);
}