document.addEventListener("DOMContentLoaded", function () {
    const celsiusInput = document.getElementById("celsius");
    const toFahrenheitButton = document.getElementById("toFahrenheit");
    const toCelsiusButton = document.getElementById("toCelsius");
    const resultElement = document.getElementById("result");

    toFahrenheitButton.addEventListener("click", function () {
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9 / 5) + 32;
            resultElement.innerHTML = `${celsius} Celsius is ${fahrenheit.toFixed(2)} Fahrenheit.`;
        } else {
            resultElement.innerHTML = "Please enter a valid temperature in Celsius.";
        }
    });

    toCelsiusButton.addEventListener("click", function () {
        const fahrenheit = parseFloat(celsiusInput.value);
        if (!isNaN(fahrenheit)) {
            const celsius = (fahrenheit - 32) * 5 / 9;
            resultElement.innerHTML = `${fahrenheit} Fahrenheit is ${celsius.toFixed(2)} Celsius.`;
        } else {
            resultElement.innerHTML = "Please enter a valid temperature in Fahrenheit.";
        }
    });
});
