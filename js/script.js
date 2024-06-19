function convert() {
    const celsiusInput = document.getElementById('celsius').value;
    const fahrenheitInput = document.getElementById('fahrenheit').value;
    const celsius = parseFloat(celsiusInput);
    const fahrenheit = parseFloat(fahrenheitInput);

    if (!isNaN(celsius)) {
        const convertedFahrenheit = (celsius * 9 / 5) + 32;
        document.getElementById('fahrenheit').value = convertedFahrenheit.toFixed(2);
        document.getElementById('calculation').value = `${celsius} °C = ${convertedFahrenheit.toFixed(2)} °F`;
    } else if (!isNaN(fahrenheit)) {
        const convertedCelsius = (fahrenheit - 32) * 5 / 9;
        document.getElementById('celsius').value = convertedCelsius.toFixed(2);
        document.getElementById('calculation').value = `${fahrenheit} °F = ${convertedCelsius.toFixed(2)} °C`;
    }
}

function reset() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('calculation').value = '';
}

function reverse() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const calculationInput = document.getElementById('calculation');

    if (celsiusInput.disabled) {
        celsiusInput.disabled = false;
        fahrenheitInput.disabled = true;
        calculationInput.placeholder = 'Metode Kalkulasi';
    } else {
        celsiusInput.disabled = true;
        fahrenheitInput.disabled = false;
        calculationInput.placeholder = 'Metode Kalkulasi';
    }
}
