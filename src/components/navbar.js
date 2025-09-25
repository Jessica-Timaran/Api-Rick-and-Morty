export function renderNavbar() {
    return `
        <nav class="navbar" style="position: fixed; top: 0; left: 0; width: 100%; background: rgba(10, 10, 31, 0.95); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(255,255,255,0.1); z-index: 1000; padding: 0 20px;">
            <div class="navbar__container" style="display: flex; align-items: center; justify-content: space-between; max-width: 1200px; margin: 0 auto; padding: 15px 0;">
                <!-- Logo -->
                <a href="#/" class="navbar__logo" data-route="/" style="display: flex; flex-direction: column; text-decoration: none; color: white; font-weight: 700;">
                    <span class="logo__text" style="font-size: 1.5rem; background: linear-gradient(45deg, #a6e22e, #00ff88); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">RICK & MORTY</span>
                    <span class="logo__dimension" style="font-size: 0.7rem; color: #8b8b9c;">Dimensión C-137</span>
                </a>

                <!-- Navigation Links -->
                <ul class="navbar__menu" style="display: flex; list-style: none; gap: 30px; margin: 0; padding: 0;">
                    <li class="navbar__item">
                        <a href="#/" class="navbar__link" data-route="/" style="display: flex; align-items: center; gap: 8px; text-decoration: none; color: #8b8b9c; padding: 10px 15px; border-radius: 8px; transition: all 0.3s;">
                            <span class="nav-icon">🏠</span>
                            Inicio
                        </a>
                    </li>
                    <li class="navbar__item">
                        <a href="#/personajes" class="navbar__link" data-route="/personajes" style="display: flex; align-items: center; gap: 8px; text-decoration: none; color: #8b8b9c; padding: 10px 15px; border-radius: 8px; transition: all 0.3s;">
                            <span class="nav-icon">👥</span>
                            Personajes
                        </a>
                    </li>
                    <li class="navbar__item">
                        <a href="#/episodios" class="navbar__link" data-route="/episodios" style="display: flex; align-items: center; gap: 8px; text-decoration: none; color: #8b8b9c; padding: 10px 15px; border-radius: 8px; transition: all 0.3s;">
                            <span class="nav-icon">📺</span>
                            Episodios
                        </a>
                    </li>
                    <li class="navbar__item">
                        <a href="#/ubicaciones" class="navbar__link" data-route="/ubicaciones" style="display: flex; align-items: center; gap: 8px; text-decoration: none; color: #8b8b9c; padding: 10px 15px; border-radius: 8px; transition: all 0.3s;">
                            <span class="nav-icon">🌍</span>
                            Ubicaciones
                        </a>
                    </li>
                </ul>

                <!-- Mobile Menu Button -->
                <button class="navbar__toggle" id="navbarToggle" style="display: none; flex-direction: column; background: none; border: none; cursor: pointer; gap: 4px;">
                    <span style="width: 25px; height: 3px; background: white;"></span>
                    <span style="width: 25px; height: 3px; background: white;"></span>
                    <span style="width: 25px; height: 3px; background: white;"></span>
                </button>
            </div>
        </nav>
    `;
}

export function initNavbar() {
    console.log('✅ Navbar inicializado');
    
    const toggle = document.getElementById('navbarToggle');
    const navbar = document.querySelector('.navbar');
    const menu = document.querySelector('.navbar__menu');
    
    if (toggle && window.innerWidth <= 768) {
        toggle.style.display = 'flex';
        menu.style.display = 'none';
        
        toggle.addEventListener('click', () => {
            const isOpen = menu.style.display === 'flex';
            menu.style.display = isOpen ? 'none' : 'flex';
            menu.style.position = 'absolute';
            menu.style.top = '100%';
            menu.style.left = '0';
            menu.style.width = '100%';
            menu.style.background = '#0a0a1f';
            menu.style.flexDirection = 'column';
            menu.style.padding = '20px';
        });
    }

    // Cerrar menú al hacer clic en un link
    document.addEventListener('click', (e) => {
        if (e.target.closest('.navbar__link') && window.innerWidth <= 768) {
            menu.style.display = 'none';
        }
    });
}