// 🌌 Smooth Scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// 🌌 Typing Effect
const text = "Hello, I'm Kratika 🚀";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 60);
    }
}

window.onload = typeEffect;

window.onload = typingEffect;
// subtle floating animation
document.querySelectorAll(".planet").forEach((planet, i) => {
    setInterval(() => {
        planet.style.transform = `translateY(${Math.sin(Date.now()/1000 + i) * 10}px)`;
    }, 50);
});
