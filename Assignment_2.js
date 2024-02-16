// Function That Converts temperature
// Conversion from celcius to fahreheit

function convertToFahrenheit(celciusValue){
    return (1.8 * celciusValue) + 32
}

const recordedFahrenheitTemperature = convertToFahrenheit(100)
console.log(recordedFahrenheitTemperature)

// Conversion from Fahrenheit to Celcius
function convertToCelcius(fahreheitValue){
    return 5/9 * (fahreheitValue - 32)
}

const recordedCelciusTemperature = convertToCelcius(212)
console.log(recordedCelciusTemperature) // 100



// If Else Function For Both Temperatures
function convertTemperatureTo(temperature, value){
    if (temperature === "celcius"){
        return 5/9 * (value - 32)
    } else {
        return (1.8 * value) + 32
    }
}

const celcuisRecording = convertTemperatureTo("celcius", 212)
console.log(celcuisRecording)