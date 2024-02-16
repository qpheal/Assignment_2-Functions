// Function That Converts temperature
// Conversion from celcius to fahreheit

function convertToFahrenheit(celsiusValue){
    return (1.8 * celsiusValue) + 32
}

const recordedFahrenheitTemperature = convertToFahrenheit(100)
console.log(recordedFahrenheitTemperature)

// Conversion from Fahrenheit to Celsius
function convertToCelsius(fahreheitValue){
    return 5/9 * (fahreheitValue - 32)
}

const recordedCelsiusTemperature = convertToCelsius(212)
console.log(recordedCelsiusTemperature) // 100



// If Else Function For Both Temperatures
function convertTemperatureTo(temperature, value){
    if (temperature === "celsius"){
        return 5/9 * (value - 32)
    } else {
        return (1.8 * value) + 32
    }
}

const celsiusRecording = convertTemperatureTo("celsius", 212)
console.log(celsiusRecording) // 100