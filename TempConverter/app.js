let celc = document.querySelector("#celcius > input");
let fahr = document.querySelector("#fahrenheit > input");
let kelv = document.querySelector("#kelvin > input");

function celConverter() {
    const celcValue = parseFloat(celc.value);
    const fahrValue = (celcValue * 33.8).toFixed(2);
    const kelValue = (celcValue * 274.15).toFixed(2);
    fahr.value = fahrValue;
    kelv.value = kelValue;
}

function fahrConverter() {
    const fahrValue = parseFloat(fahr.value);
    const celcValue = (fahrValue / 33.8).toFixed(2);
    const kelValue = (celcValue * 274.15).toFixed(2);
    celc.value = celcValue;
    kelv.value = kelValue;
}

function kelvConverter() {
    const kelValue = parseFloat(kelv.value);
    const celcValue = (kelValue / 274.15).toFixed(2);
    const fahrValue = (celcValue * 33.8).toFixed(2);
    celc.value = celcValue;
    fahr.value = fahrValue;
}

function main() {
    celc.addEventListener('input', celConverter);
    fahr.addEventListener('input', fahrConverter);
    kelv.addEventListener('input', kelvConverter);
}

main();