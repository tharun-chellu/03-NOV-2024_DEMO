function celsiusToFahrenheit(celsius) {
    // find the conversion from Celsius to
    // Fahrenheit Fahrenheit=(Celsius×9/5)+32
    return (celsius * 9 / 5) + 32;

}

console.log(celsiusToFahrenheit(20));



function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

console.log(fahrenheitToCelsius(68));


// (*9/5)+32 c-> f
// (-32)*5/9 f -> c