import './assets/css/global.css';
import './assets/css/characters.css';
import './assets/css/episodes.css';
import './assets/css/locations.css';
import { renderHome } from './pages/home.js';
import { renderCharacters, initCharacters } from './pages/characters.js';
import { renderNavbar, initNavbar } from './components/navbar.js';
import { renderEpisodes, initEpisodes } from './pages/episodes.js';
import { renderLocations, initLocations } from './pages/locations.js';

console.log('🚀 App iniciando...');

// Renderizar navbar inmediatamente
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ DOM cargado');
    
    // Renderizar navbar
    renderNavbarToDOM();
    
    // Manejar ruta inicial
    handleInitialRoute();
    
    // Configurar navegación
    setupNavigation();
});

function loadEpisodesPage() {
    console.log('📺 Cargando página de episodios...');
    const app = document.getElementById('app');
    app.innerHTML = renderEpisodes();
    
    window.location.hash = '/episodios';
    updateActiveNavLink('/episodios');
    
    setTimeout(() => {
        initEpisodes();
    }, 100);
}

function loadLocationsPage() {
    console.log('🌍 Cargando página de ubicaciones...');
    const app = document.getElementById('app');
    app.innerHTML = renderLocations();
    
    window.location.hash = '/ubicaciones';
    updateActiveNavLink('/ubicaciones');
    
    setTimeout(() => {
        initLocations();
    }, 100);
}

function renderNavbarToDOM() {
    // Crear y agregar navbar
    const header = document.createElement('header');
    header.innerHTML = renderNavbar();
    document.body.insertBefore(header, document.body.firstChild);
    
    // Inicializar navbar
    initNavbar();
}

function handleInitialRoute() {
    const hash = window.location.hash;
    console.log('📍 Ruta inicial:', hash);
    
    if (hash === '#/personajes') {
        loadCharactersPage();
    } else {
        loadHomePage();
    }
}

function setupNavigation() {
    document.addEventListener('click', function(e) {
        if (e.target.closest('[data-route]')) {
            e.preventDefault();
            const route = e.target.closest('[data-route]').getAttribute('data-route');
            
            if (route === '/personajes') {
                loadCharactersPage();
            } else if (route === '/episodios') {
                loadEpisodesPage();
            } else if (route === '/ubicaciones') {
                loadLocationsPage();
            } else if (route === '/') {
                loadHomePage();
            }
        }
    });
}

function loadHomePage() {
    console.log('🏠 Cargando página de inicio...');
    const app = document.getElementById('app');
    app.innerHTML = renderHome();
    
    // Actualizar URL
    window.location.hash = '/';
    
    // Actualizar navbar activo
    updateActiveNavLink('/');
}

function loadCharactersPage() {
    console.log('👥 Cargando página de personajes...');
    const app = document.getElementById('app');
    app.innerHTML = renderCharacters();
    
    // Actualizar URL
    window.location.hash = '/personajes';
    
    // Actualizar navbar activo
    updateActiveNavLink('/personajes');
    
    // Inicializar personajes después de que el DOM se renderice
    setTimeout(() => {
        initCharacters();
    }, 100);
}

function loadComingSoon(section) {
    const app = document.getElementById('app');
    app.innerHTML = `
        <section class="proximamente" style="padding: 100px 20px; text-align: center;">
            <div class="portal-animation" style="width: 100px; height: 100px; margin: 0 auto 30px;">
                <div class="portal-ring" style="position: absolute; width: 100%; height: 100%; border: 3px solid transparent; border-top-color: #00ff88; border-radius: 50%; animation: portalSpin 2s linear infinite;"></div>
            </div>
            <h1 style="color: #00ff88; margin-bottom: 20px;">¡${section} Próximamente!</h1>
            <p style="color: #8b8b9c; margin-bottom: 30px;">Estamos explorando esta parte del multiverso. ¡Vuelve pronto!</p>
            <button class="cta-btn" data-route="/" style="background: #00ff88; color: #0a0a1f; padding: 12px 30px; border: none; border-radius: 25px; cursor: pointer;">Volver al Inicio</button>
        </section>
    `;
    
    window.location.hash = section.toLowerCase();
    updateActiveNavLink('/');
}

function updateActiveNavLink(route) {
    const links = document.querySelectorAll('.navbar__link');
    links.forEach(link => {
        const linkRoute = link.getAttribute('data-route');
        if (linkRoute === route) {
            link.classList.add('navbar__link--active');
        } else {
            link.classList.remove('navbar__link--active');
        }
    });
}

// Agregar animación CSS básica si no existe
const style = document.createElement('style');
style.textContent = `
    @keyframes portalSpin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    .navbar__link--active {
        background: rgba(0, 255, 136, 0.1) !important;
        color: #00ff88 !important;
    }
`;
document.head.appendChild(style);

console.log('🎯 Router configurado correctamente');