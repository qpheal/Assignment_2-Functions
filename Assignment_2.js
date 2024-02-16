// Function That Converts temperature
// Conversion from celcius to fahreheit

function convertToFahrenheit(celciusValue){
    return (1.8 * celciusValue) + 32
}

const recordedFahrenheitTemperature = convertToFahrenheit(100)

console.log(recordedFahrenheitTemperature) //212