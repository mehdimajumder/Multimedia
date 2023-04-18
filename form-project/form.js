let temperatureInput = document.getElementById("temperature");
let fromCelsiusInput = document.querySelector('input[name="from"][value="celsius"]');
let fromFahrenheitInput = document.querySelector('input[name="from"][value="fahrenheit"]');
let toCelsiusInput = document.querySelector('input[name="to"][value="celsius"]');
let toFahrenheitInput = document.querySelector('input[name="to"][value="fahrenheit"]');
let resultElement = document.getElementById("result");

// Retrieve the stored temperature value if it exists
let storedTemperature = localStorage.getItem("temperature");
if (storedTemperature !== null) {
    temperatureInput.value = storedTemperature;
}

function convertTemperature() {
    let temperature = parseFloat(temperatureInput.value);
    let fromCelsius = fromCelsiusInput.checked;
    let toCelsius = toCelsiusInput.checked;

    if (isNaN(temperature)) {
        resultElement.textContent = "Please enter a valid temperature";
        return;
    }

    // Store the entered temperature value in localStorage
    localStorage.setItem("temperature", temperature);

    // Convert the temperature based on the selected options
    let convertedTemperature;
    if (fromCelsius && toFahrenheitInput.checked) {
        convertedTemperature = temperature * 1.8 + 32;
    } else if (fromFahrenheitInput.checked && toCelsiusInput.checked) {
        convertedTemperature = (temperature - 32) / 1.8;
    } else {
        // Invalid conversion options selected
        resultElement.textContent = "Please select valid conversion options";
        return;
    }

    // Display the converted temperature
    resultElement.textContent = convertedTemperature.toFixed(2);
}

// Add event listeners to the input fields and conversion options
temperatureInput.addEventListener("input", convertTemperature);
fromCelsiusInput.addEventListener("change", convertTemperature);
fromFahrenheitInput.addEventListener("change", convertTemperature);
toCelsiusInput.addEventListener("change", convertTemperature);
toFahrenheitInput.addEventListener("change", convertTemperature);

// Add a reset button to clear the stored temperature value and input field
let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function() {
    localStorage.removeItem("temperature");
    temperatureInput.value = "";
    resultElement.textContent = "";
});
