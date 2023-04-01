var celsius = document.getElementById("celsius");
var fahrenheit = document.getElementById("fahrenheit");
var button = document.getElementById("button");

var selected = celsius; // Input sélectionné

function conversion() {
    var converted = parseInt(selected.value, 10);
    if (selected.name === "celsius") {
        document.getElementById("fahrenheit").value = parseInt(converted * 9 / 5 + 32);
    } else { // Si input fahrenheit sélectionné
        document.getElementById("celsius").value = parseInt((converted - 32) * 5 / 9);
    }
}

celsius.addEventListener("blur", () => { // Quand l'élément n'est plus sélectionné
    selected = document.getElementById('celsius');
    selected.value = Math.trunc(selected.value); // Enlève la virgule ou le point
});

fahrenheit.addEventListener("blur", () => {
    selected = document.getElementById('fahrenheit');
    selected.value = Math.trunc(selected.value);
});

button.addEventListener("click", () => {
    conversion();
});
