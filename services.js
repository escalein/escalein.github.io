// services.js

const canvas = document.getElementById("background-animation");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let wave = {
    y: canvas.height / 2,
    length: 0.01,
    amplitude: 100,
    frequency: 0.02
};

let increment = wave.frequency;

function drawWave() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);

    for (let i = 0; i < canvas.width; i++) {
        ctx.lineTo(
            i,
            wave.y + Math.sin(i * wave.length + increment) * wave.amplitude
        );
    }

    ctx.strokeStyle = "#00d8ff";
    ctx.lineWidth = 2;
    ctx.stroke();
    increment += wave.frequency;

    requestAnimationFrame(drawWave);
}

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

drawWave();
