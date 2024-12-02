const chistes = [
    "¿Qué dijo el esqueleto cuando entró al bar? 'Me pones una cerveza y un trapeador.'",
    "¿Cómo murió el fantasma en una fiesta? De un susto... ¡el susto fue el precio de la cuenta!",
    "¿Por qué los vampiros nunca se broncean? Porque siempre están en modo crepúsculo.",
    "¿Qué hace un zombie cuando está deprimido? ¡Se come el coco!",
    "¿Por qué las brujas nunca llevan mapas? Porque siempre saben dónde está su escoba.",
];

function mostrarChiste() {
    const randomIndex = Math.floor(Math.random() * chistes.length);
    document.getElementById("chiste").textContent = chistes[randomIndex];
}
