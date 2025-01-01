// jobs.js

const canvas = document.getElementById("background-animation");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const shapes = [];
const colors = ["#00d8ff", "#ffffff", "#292929"];

class Shape {
    constructor(x, y, size, angle, speed) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.angle = angle;
        this.speed = speed;
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.rect(-this.size / 2, -this.size / 2, this.size, this.size);
        ctx.fill();
        ctx.restore();
    }

    update() {
        this.angle += this.speed;
        this.x += Math.sin(this.angle) * 2;
        this.y += Math.cos(this.angle) * 2;

        if (this.x > canvas.width + this.size) this.x = -this.size;
        if (this.y > canvas.height + this.size) this.y = -this.size;

        this.draw();
    }
}

function initShapes() {
    for (let i = 0; i < 30; i++) {
        const size = Math.random() * 30 + 20;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 0.05 + 0.01;
        shapes.push(new Shape(x, y, size, angle, speed));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    shapes.forEach(shape => shape.update());
    requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    shapes.length = 0;
    initShapes();
});

initShapes();
animate();
