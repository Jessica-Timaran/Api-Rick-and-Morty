export function renderNavbar() {
    return `
        <nav class="navbar">
            <div class="navbar__container">
                <!-- Logo -->
                <a href="#/" class="navbar__logo" data-route="/">
                    <span class="logo__text">RICK & MORTY</span>
                    <span class="logo__dimension">Dimensión C-137</span>
                </a>

                <!-- Navigation Links -->
                <ul class="navbar__menu" id="navbarMenu">
                    <li class="navbar__item">
                        <a href="#/" class="navbar__link" data-route="/">
                            <span class="nav-icon">🏠</span>
                            Inicio
                        </a>
                    </li>
                    <li class="navbar__item">
                        <a href="#/personajes" class="navbar__link" data-route="/personajes">
                            <span class="nav-icon">👥</span>
                            Personajes
                        </a>
                    </li>
                    <li class="navbar__item">
                        <a href="#/episodios" class="navbar__link" data-route="/episodios">
                            <span class="nav-icon">📺</span>
                            Episodios
                        </a>
                    </li>
                    <li class="navbar__item">
                        <a href="#/ubicaciones" class="navbar__link" data-route="/ubicaciones">
                            <span class="nav-icon">🌍</span>
                            Ubicaciones
                        </a>
                    </li>
                </ul>

                <!-- Mobile Menu Button -->
                <button class="navbar__toggle" id="navbarToggle" aria-label="Menú">
                    <span class="toggle-bar"></span>
                    <span class="toggle-bar"></span>
                    <span class="toggle-bar"></span>
                </button>
            </div>
        </nav>
    `;
}

export function initNavbar() {
    console.log('✅ Navbar inicializado');
    
    const toggle = document.getElementById('navbarToggle');
    const menu = document.getElementById('navbarMenu');
    const navbar = document.querySelector('.navbar');
    
    if (!toggle || !menu) {
        console.error('❌ No se encontraron elementos del navbar');
        return;
    }

    // Función para abrir/cerrar el menú
    function toggleMenu() {
        const isOpen = menu.classList.contains('navbar__menu--open');
        
        if (isOpen) {
            // Cerrar menú
            menu.classList.remove('navbar__menu--open');
            toggle.classList.remove('navbar__toggle--open');
            document.body.style.overflow = ''; // Restaurar scroll
        } else {
            // Abrir menú
            menu.classList.add('navbar__menu--open');
            toggle.classList.add('navbar__toggle--open');
            document.body.style.overflow = 'hidden'; // Bloquear scroll
        }
    }

    // Función para cerrar el menú
    function closeMenu() {
        menu.classList.remove('navbar__menu--open');
        toggle.classList.remove('navbar__toggle--open');
        document.body.style.overflow = ''; // Restaurar scroll
    }

    // Evento del botón toggle
    toggle.addEventListener('click', function(e) {
        e.stopPropagation(); // Evitar que el evento se propague
        toggleMenu();
    });

    // Cerrar menú al hacer clic en un link
    menu.addEventListener('click', function(e) {
        if (e.target.closest('.navbar__link')) {
            closeMenu();
        }
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!navbar.contains(e.target)) {
            closeMenu();
        }
    });

    // Cerrar menú al redimensionar la ventana (si se hace más grande)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });

    // Actualizar visibilidad del toggle basado en el tamaño de pantalla
    function updateToggleVisibility() {
        if (window.innerWidth <= 768) {
            toggle.style.display = 'flex';
        } else {
            toggle.style.display = 'none';
            closeMenu(); // Asegurar que el menú esté cerrado en desktop
        }
    }

    // Inicializar y escuchar cambios de tamaño
    updateToggleVisibility();
    window.addEventListener('resize', updateToggleVisibility);

    console.log('🎯 Eventos del navbar configurados correctamente');
}

export function updateActiveLink() {
    const currentPath = window.location.hash.replace('#', '') || '/';
    const links = document.querySelectorAll('.navbar__link');
    
    links.forEach(link => {
        const route = link.getAttribute('data-route');
        if (route === currentPath) {
            link.classList.add('navbar__link--active');
        } else {
            link.classList.remove('navbar__link--active');
        }
    });
}