document.addEventListener("DOMContentLoaded", function () {
    const inputTemp = document.getElementById("inputTemp");
    const fromUnit = document.getElementById("fromUnit");
    const convertBtn = document.getElementById("convertBtn");
    const result = document.getElementById("result");

    convertBtn.addEventListener("click", function () {
        const temperature = parseFloat(inputTemp.value);
        const from = fromUnit.value;
        const toUnits = {
            celsius: "Celsius",
            fahrenheit: "Fahrenheit",
            kelvin: "Kelvin",
            rankine: "Rankine",
            reaumur: "Réaumur",
        };

        if (isNaN(temperature)) {
            result.textContent = "Please enter a valid temperature.";
            return;
        }

        let convertedTemp;
        switch (from) {
            case "celsius":
                convertedTemp = {
                    fahrenheit: (temperature * 9/5) + 32,
                    kelvin: temperature + 273.15,
                    rankine: (temperature + 273.15) * 9/5,
                    reaumur: temperature * 0.8,
                };
                break;
            case "fahrenheit":
                convertedTemp = {
                    celsius: (temperature - 32) * 5/9,
                    kelvin: (temperature - 32) * 5/9 + 273.15,
                    rankine: temperature + 459.67,
                    reaumur: (temperature - 32) * 4/9,
                };
                break;
            case "kelvin":
                convertedTemp = {
                    celsius: temperature - 273.15,
                    fahrenheit: (temperature - 273.15) * 9/5 + 32,
                    rankine: temperature * 1.8,
                    reaumur: (temperature - 273.15) * 0.8,};
                    break;
                case "rankine":
                    convertedTemp = {
                        celsius: (temperature - 491.67) * 5/9,
                        fahrenheit: temperature - 459.67,
                        kelvin: temperature * 5/9,
                        reaumur: (temperature - 491.67) * 5/9 * 0.8,
                    };
                    break;
                case "reaumur":
                    convertedTemp = {
                        celsius: temperature * 1.25,
                        fahrenheit: (temperature * 2.25) + 32,
                        kelvin: temperature * 1.25 + 273.15,
                        rankine: (temperature * 2.25 + 32 + 459.67),
                    };
                    break;
            }
    
            result.innerHTML = `<strong>${temperature} ${toUnits[from]} is equivalent to:</strong><br>`;
            for (const unit in convertedTemp) {
                result.innerHTML += `${convertedTemp[unit].toFixed(2)} ${toUnits[unit]}<br>`;
            }
        });
    });