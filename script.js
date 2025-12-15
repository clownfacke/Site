// ---- Навигация по секциям ----
function showSection(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// ---- Логотипы ----
const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg",
    "https://wallpapers.com/images/high/pikachu-pokemon-logo-5ke7lnfde4xbokky.webp",
    "https://wallpapers.com/images/high/pokemon-rejuvenation-logo-rkxzqnxztnmnz42t.webp",
    "https://wallpapers.com/images/high/pokemon-logo-png-image-pokemon-go-logo-vector-gagwvnr2cesn6aw1.webp",
];

let logoIndex = 0;
const logoImg = document.getElementById('logo');

function updateLogo() {
    logoImg.style.opacity = 0;
    setTimeout(() => {
        logoImg.src = logos[logoIndex];
        logoImg.style.opacity = 1;
    }, 300);
}

function nextLogo() {
    logoIndex = (logoIndex + 1) % logos.length;
    updateLogo();
}

function prevLogo() {
    logoIndex = (logoIndex - 1 + logos.length) % logos.length;
    updateLogo();
}

// Инициализация первой картинки логотипа
logoImg.src = logos[0];

// ---- Инициализация каруселей Bootstrap  ----
// Инициализация карусели покемонов
const pokemonCarousel = new bootstrap.Carousel(document.getElementById('pokemonCarousel'), {
    wrap: true // Бесконечная прокрутка
});

// Инициализация карусели героев
const heroCarousel = new bootstrap.Carousel(document.getElementById('heroCarousel'), {
    wrap: true // Бесконечная прокрутка
});