// Function That Converts temperature
// Conversion from celcius to fahreheit

function convertToFahrenheit(celciusValue){
    return (1.8 * celciusValue) + 32
}

const recordedFahrenheitTemperature = convertToFahrenheit(100)
console.log(recordedFahrenheitTemperature)

function convertToCelcius(fahreheitValue){
    return 5/9 * (fahreheitValue - 32)
}

const recordedCelciusTemperature = convertToCelcius(212)
console.log(recordedCelciusTemperature) // 100