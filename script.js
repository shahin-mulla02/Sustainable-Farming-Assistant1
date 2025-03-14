// ✅ Soil Analysis Function
function analyzeSoil() {
    let soilType = document.getElementById("soilType").value.toLowerCase();
    let cropResult = document.getElementById("cropResult");

    let crops = {
        sandy: "Carrots, Peanuts, Watermelon 🍉",
        clay: "Rice, Wheat, Sunflower 🌾",
        loamy: "Tomatoes, Corn, Soybeans 🌽"
    };

    cropResult.innerText = crops[soilType] || "❌ Please enter a valid soil type!";
}

// ✅ Fetch Weather Data from OpenWeather API
async function getWeather() {
    let city = document.getElementById("city").value;
    let weatherResult = document.getElementById("weatherResult");

    let apiKey = "YOUR_OPENWEATHER_API_KEY"; // Get your API key from https://openweathermap.org/
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        
        if (data.main) {
            weatherResult.innerText = `🌡 Temperature: ${data.main.temp}°C, Condition: ${data.weather[0].description}`;
        } else {
            weatherResult.innerText = "❌ City not found!";
        }
    } catch (error) {
        weatherResult.innerText = "❌ Error fetching data!";
    }
}

// ✅ Show Organic Farming Tips
function showTip() {
    let tips = [
        "🌿 Use compost instead of chemical fertilizers.",
        "🚜 Rotate crops to improve soil fertility.",
        "💧 Use drip irrigation to save water.",
        "🐞 Encourage natural pest control with beneficial insects."
    ];

    let randomTip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById("farmingTip").innerText = randomTip;
}
