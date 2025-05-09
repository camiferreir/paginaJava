function converterTemperatura() {
    const temperatura = parseFloat(document.getElementById("temperatura").value);
    const escalaOrigem = document.getElementById("escalaOrigem").value;
    const escalaDestino = document.getElementById("escalaDestino").value;
    const resultado = document.getElementById("resultado");


    if (isNaN(temperatura)) {
        resultado.innerHTML = "Por favor, insira uma temperatura válida.";
        return;
    }

    let temperaturaConvertida;


    if (escalaOrigem === "celsius") {
        if (escalaDestino === "fahrenheit") {
            temperaturaConvertida = (temperatura * 9 / 5) + 32;
            resultado.innerHTML = `Temperatura convertida: ${temperaturaConvertida.toFixed(2)}°F`;
        } else if (escalaDestino === "kelvin") {
            temperaturaConvertida = temperatura + 273.15;
            resultado.innerHTML = `Temperatura convertida: ${temperaturaConvertida.toFixed(2)}K`;
        } else {
            resultado.innerHTML = `Temperatura convertida: ${temperatura}°C`;
        }
    } else if (escalaOrigem === "fahrenheit") {
        if (escalaDestino === "celsius") {
            temperaturaConvertida = (temperatura - 32) * 5 / 9;
            resultado.innerHTML = `Temperatura convertida: ${temperaturaConvertida.toFixed(2)}°C`;
        } else if (escalaDestino === "kelvin") {
            temperaturaConvertida = (temperatura - 32) * 5 / 9 + 273.15;
            resultado.innerHTML = `Temperatura convertida: ${temperaturaConvertida.toFixed(2)}K`;
        } else {
            resultado.innerHTML = `Temperatura convertida: ${temperatura}°F`;
        }
    } else if (escalaOrigem === "kelvin") {
        if (escalaDestino === "celsius") {
            temperaturaConvertida = temperatura - 273.15;
            resultado.innerHTML = `Temperatura convertida: ${temperaturaConvertida.toFixed(2)}°C`;
        } else if (escalaDestino === "fahrenheit") {
            temperaturaConvertida = (temperatura - 273.15) * 9 / 5 + 32;
            resultado.innerHTML = `Temperatura convertida: ${temperaturaConvertida.toFixed(2)}°F`;
        } else {
            resultado.innerHTML = `Temperatura convertida: ${temperatura}K`;
        }
    }
}
