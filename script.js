function generateRandomNumber() {
    const minValue = parseInt(document.getElementById('min-value').value);
    const maxValue = parseInt(document.getElementById('max-value').value);

    if (isNaN(minValue) || isNaN(maxValue)) {
        document.getElementById('result').innerText = "Please enter valid numbers.";
        return;
    }

    if (minValue > maxValue) {
        document.getElementById('result').innerText = "Minimum value cannot be greater than maximum value.";
        return;
    }

    const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    document.getElementById('result').innerText = "Random Number: " + randomNumber;
}
