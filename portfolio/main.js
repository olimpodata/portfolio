const palettes = [
    ['#FF5733', '#FFBD33', '#33FF57', '#FF33A8'],
    ['#FF33A8', '#33FFBD', '#FF5733', '#33FF57', '#F0E68C'],
    ['#3357FF', '#F0E68C', '#FFBD33', '#FF5733', '#33FF57'],
    ['#FFB3BA', '#FFDFBA', '#FFFABA', '#BAFFC9', '#BAE1FF'],
    ['#FFABAB', '#FFC3A0', '#FF677D', '#D4A5A5', '#392F5A'],
    ['#FFE156', '#6BCB77', '#3F8CFF', '#FF6B6B', '#FFD166'],
    ['#FF9B85', '#FF6F61', '#D4B5FF', '#A2D2FF', '#FFC3A0'],
    ['#B9FBC0', '#A0E7E5', '#E8E7FF', '#FF9AB6', '#FF677D']
];

// Función para cambiar el color de cada letra
function animateText(element) {
    const text = element.textContent;
    element.textContent = '';

    text.split('').forEach((letter) => {
        const span = document.createElement('span');
        span.textContent = letter;
        element.appendChild(span);

        const colors = palettes[Math.floor(Math.random() * palettes.length)];
        const intervalTime = Math.random() * 2000 + 100;

        setInterval(() => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            span.style.color = randomColor;
        }, intervalTime);
    });
}

// Selecciona el encabezado y otros elementos de texto
const header = document.getElementById('letrasdecolores');
animateText(header);

// Selecciona todas las secciones que quieres animar
const sections = document.querySelectorAll('h2, h3, p');

sections.forEach(section => {
    animateText(section);
});
