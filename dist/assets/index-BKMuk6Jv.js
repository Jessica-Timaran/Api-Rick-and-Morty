(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){return`
        <!-- Hero Section -->
        <section class="home-hero" style="min-height: 100vh; background: linear-gradient(135deg, #050510 0%, #0a0a1f 50%, #1a1a2e 100%); display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden;">
            <!-- Efecto de partículas -->
            <div class="particles" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;">
                <div style="position: absolute; top: 20%; left: 10%; width: 4px; height: 4px; background: #00ff88; border-radius: 50%; animation: float 6s infinite;"></div>
                <div style="position: absolute; top: 60%; left: 80%; width: 3px; height: 3px; background: #ff00ff; border-radius: 50%; animation: float 8s infinite 2s;"></div>
                <div style="position: absolute; top: 40%; left: 60%; width: 2px; height: 2px; background: #00eeff; border-radius: 50%; animation: float 10s infinite 1s;"></div>
            </div>

            <!-- Portal central -->
            <div class="portal" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 200px; height: 200px; border-radius: 50%; background: conic-gradient(from 0deg, #ff00ff, #00eeff, #00ff88, #ff00ff); opacity: 0.3; filter: blur(20px); animation: portalSpin 8s linear infinite;"></div>

            <!-- Contenido -->
            <div class="hero-content" style="position: relative; z-index: 2; text-align: center; color: white; padding: 20px;">
                <h1 style="font-size: clamp(2.5rem, 6vw, 5rem); margin-bottom: 20px; font-weight: 900;">
                    <span style="background: linear-gradient(45deg, #a6e22e, #00ff88); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">RICK</span> 
                    <span style="color: white;">AND</span> 
                    <span style="background: linear-gradient(45deg, #f92672, #ff00ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">MORTY</span>
                </h1>
                
                <p style="font-size: clamp(1rem, 2vw, 1.3rem); margin-bottom: 30px; color: #8b8b9c; max-width: 600px;">
                    Explora el multiverso, descubre personajes interdimensionales y vive aventuras científicamente absurdas.
                </p>
                
                <div class="cta-buttons" style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
                    <button class="cta-btn primary" data-route="/personajes" style="background: #00ff88; color: #0a0a1f; padding: 15px 30px; border: none; border-radius: 25px; font-size: 1.1rem; font-weight: 600; cursor: pointer; transition: all 0.3s;">
                        👥 Explorar Personajes
                    </button>
                    <button class="cta-btn secondary" data-route="/episodios" style="background: transparent; color: #00ff88; padding: 15px 30px; border: 2px solid #00ff88; border-radius: 25px; font-size: 1.1rem; cursor: pointer; transition: all 0.3s;">
                        📺 Episodios
                    </button>
                </div>

                <!-- Stats -->
                <div class="hero-stats" style="display: flex; justify-content: center; gap: 40px; margin-top: 50px; flex-wrap: wrap;">
                    <div class="stat" style="text-align: center;">
                        <div style="font-size: 2rem; color: #00ff88; font-weight: 700;">500+</div>
                        <div style="color: #8b8b9c; font-size: 0.9rem;">Personajes</div>
                    </div>
                    <div class="stat" style="text-align: center;">
                        <div style="font-size: 2rem; color: #ff00ff; font-weight: 700;">61</div>
                        <div style="color: #8b8b9c; font-size: 0.9rem;">Episodios</div>
                    </div>
                    <div class="stat" style="text-align: center;">
                        <div style="font-size: 2rem; color: #00eeff; font-weight: 700;">∞</div>
                        <div style="color: #8b8b9c; font-size: 0.9rem;">Dimensiones</div>
                    </div>
                </div>
            </div>

            <!-- Scroll indicator -->
            <div class="scroll-indicator" style="position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%); color: #8b8b9c; font-size: 0.8rem;">
                <div style="width: 2px; height: 30px; background: #00ff88; margin: 0 auto 10px; animation: bounce 2s infinite;"></div>
                Desplázate para explorar
            </div>
        </section>

        <!-- Content Section -->
        <section class="home-content" id="sec" style="padding: 80px 20px; background: #0a0a1f; color: white;">
            <div class="container" style="max-width: 1200px; margin: 0 auto;">
                <div style="text-align: center; margin-bottom: 60px;">
                    <h2 style="font-size: 2.5rem; margin-bottom: 20px; background: linear-gradient(45deg, #00ff88, #00eeff); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                        EL MULTIVERSO TE ESPERA
                    </h2>
                    <p style="font-size: 1.2rem; color: #8b8b9c; max-width: 800px; margin: 0 auto;">
                        Rick and Morty es una serie que sigue las desventuras de un científico genial pero alcohólico 
                        y su fácilmente influenciable nieto, quienes pasan el tiempo entre la vida doméstica y los 
                        viajes espaciales, temporales e intergalácticos.
                    </p>
                </div>

                <!-- Features Grid -->
                <div class="features-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-bottom: 60px;">
                    <div class="feature-card" style="background: rgba(255,255,255,0.05); padding: 40px 30px; border-radius: 15px; border: 1px solid rgba(255,255,255,0.1); transition: all 0.3s; text-align: center;">
                        <div style="font-size: 3rem; margin-bottom: 20px;">👥</div>
                        <h3 style="color: #00ff88; margin-bottom: 15px;">Personajes Únicos</h3>
                        <p style="color: #8b8b9c; line-height: 1.6;">
                            Desde Rick Sanchez hasta Mr. Meeseeks, conoce a todos los personajes del multiverso 
                            con detalles completos y estadísticas.
                        </p>
                        <button class="feature-btn" data-route="/personajes" style="background: transparent; color: #00ff88; border: 2px solid #00ff88; padding: 10px 20px; border-radius: 20px; margin-top: 20px; cursor: pointer;">
                            Explorar Personajes
                        </button>
                    </div>

                    <div class="feature-card" style="background: rgba(255,255,255,0.05); padding: 40px 30px; border-radius: 15px; border: 1px solid rgba(255,255,255,0.1); transition: all 0.3s; text-align: center;">
                        <div style="font-size: 3rem; margin-bottom: 20px;">📺</div>
                        <h3 style="color: #ff00ff; margin-bottom: 15px;">Episodios</h3>
                        <p style="color: #8b8b9c; line-height: 1.6;">
                            Accede a información detallada de todos los episodios, temporadas y las locas aventuras 
                            de Rick y Morty a través del multiverso.
                        </p>
                        <button class="feature-btn" data-route="/episodios" style="background: transparent; color: #ff00ff; border: 2px solid #ff00ff; padding: 10px 20px; border-radius: 20px; margin-top: 20px; cursor: pointer;">
                            Explorar Episodios
                        </button>
                    </div>

                    <div class="feature-card" style="background: rgba(255,255,255,0.05); padding: 40px 30px; border-radius: 15px; border: 1px solid rgba(255,255,255,0.1); transition: all 0.3s; text-align: center;">
                        <div style="font-size: 3rem; margin-bottom: 20px;">🌍</div>
                        <h3 style="color: #00eeff; margin-bottom: 15px;">Ubicaciones Asombrosas</h3>
                        <p style="color: #8b8b9c; line-height: 1.6;">
                            Descubre planetas, dimensiones y locaciones absurdas visitadas por Rick y Morty 
                            en sus viajes interdimensionales.
                        </p>
                        <button class="feature-btn" data-route="/ubicaciones" style="background: transparent; color: #00eeff; border: 2px solid #00eeff; padding: 10px 20px; border-radius: 20px; margin-top: 20px; cursor: pointer;">
                            Explorar Ubicaciones
                        </button>
                    </div>
                </div>

                <!-- Info Section -->
                <div class="info-section" style="background: rgba(0,255,136,0.1); padding: 40px; border-radius: 15px; border: 1px solid rgba(0,255,136,0.3); text-align: center;">
                    <h3 style="color: #00ff88; margin-bottom: 20px;">¿NUEVO EN EL MULTIVERSO?</h3>
                    <p style="color: white; line-height: 1.6; margin-bottom: 20px;">
                        <strong>Rick and Morty</strong> es una serie de televisión estadounidense de animación para adultos 
                        creada por Justin Roiland y Dan Harmon. La serie sigue las desventuras de un científico, 
                        Rick Sanchez, y su fácilmente influenciable nieto, Morty.
                    </p>
                    <div style="font-style: italic; color: #a6e22e; border-left: 3px solid #a6e22e; padding-left: 20px; text-align: left;">
                        "La ciencia es más arte que ciencia, Morty. Mucha gente no lo entiende." - Rick Sanchez
                    </div>
                </div>
            </div>
        </section>

        <style>
            /* Animaciones para el home */
            @keyframes portalSpin {
                0% { transform: translate(-50%, -50%) rotate(0deg); }
                100% { transform: translate(-50%, -50%) rotate(360deg); }
            }

            @keyframes float {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-20px) rotate(180deg); }
            }

            @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }

            /* Efectos hover */
            .feature-card:hover {
                transform: translateY(-10px);
                border-color: #00ff88 !important;
                box-shadow: 0 10px 30px rgba(0, 255, 136, 0.2);
            }

            .cta-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 5px 15px rgba(0, 255, 136, 0.4);
            }

            .feature-btn:hover {
                background: rgba(0, 255, 136, 0.1) !important;
            }

            /* Responsive */
            @media (max-width: 768px) {
                .cta-buttons {
                    flex-direction: column;
                    align-items: center;
                }
                
                .hero-stats {
                    gap: 20px;
                }
                
                .feature-card {
                    padding: 30px 20px !important;
                }
            }
        </style>
    `}var t=`https://rickandmortyapi.com/api/character`,n=class{static async getAllCharacters(e=1){try{let n=await fetch(`${t}?page=${e}`);if(!n.ok)throw Error(`Error fetching characters`);return await n.json()}catch(e){throw console.error(`Error fetching characters:`,e),e}}static async getCharactersByName(e,n=1){try{let r=await fetch(`${t}?name=${e}&page=${n}`);if(!r.ok)throw Error(`Character not found`);return await r.json()}catch(e){throw console.error(`Error searching characters:`,e),e}}static async getCharacterById(e){try{let n=await fetch(`${t}/${e}`);if(!n.ok)throw Error(`Character not found`);return await n.json()}catch(e){throw console.error(`Error fetching character:`,e),e}}static async getMultipleCharacters(e){try{let n=await fetch(`${t}/${e.join(`,`)}`);if(!n.ok)throw Error(`Error fetching characters`);return await n.json()}catch(e){throw console.error(`Error fetching multiple characters:`,e),e}}};function r(e,t){let n=document.createElement(`div`);return n.className=`character-card`,n.innerHTML=`
        <div class="character-card__inner">
            <div class="character-card__image-container">
                <img src="${e.image}" alt="${e.name}" class="character-card__image">
                <div class="character-card__status ${e.status.toLowerCase()}">
                    <span class="status-indicator"></span>
                    ${i(e.status)} - ${a(e.species)}
                </div>
            </div>
            
            <div class="character-card__content">
                <h3 class="character-card__name">${e.name}</h3>
                <div class="character-card__info">
                    <div class="info-item">
                        <span class="info-label">Última ubicación:</span>
                        <span class="info-value">${e.location.name}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Primera vez visto en:</span>
                        <span class="info-value">${e.origin.name}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Género:</span>
                        <span class="info-value ${e.gender.toLowerCase()}">${o(e.gender)}</span>
                    </div>
                </div>
            </div>
            
            <div class="character-card__hover">
                <span>Click para detalles</span>
                <div class="portal-effect"></div>
            </div>
        </div>
    `,n.addEventListener(`click`,()=>t(e)),n}function i(e){return{Alive:`Vivo`,Dead:`Muerto`,unknown:`Desconocido`}[e]||e}function a(e){return{Human:`Humano`,Alien:`Alienígena`,Humanoid:`Humanoide`}[e]||e}function o(e){return{Male:`Masculino`,Female:`Femenino`,unknown:`Desconocido`}[e]||e}function s(){return`
        <section class="characters-page">
            <!-- Header Section -->
            <div class="characters-header">
                <div class="container">
                    <h1 class="characters-title">PERSONAJES</h1>
                    <p class="characters-subtitle">Explora todos los personajes del multiverso</p>
                    
                    <!-- Search Bar -->
                    <div class="search-container">
                        <div class="search-box">
                            <input type="text" id="characterSearch" class="search-input" placeholder="Buscar personaje por nombre...">
                            <div class="search-icon">🔍</div>
                            <div class="search-portal"></div>
                        </div>
                    </div>
                    
                    <!-- Filters -->
                    <div class="filters-container">
                        <div class="filter-group">
                            <label>Estado:</label>
                            <div class="filter-buttons">
                                <button class="filter-btn active" data-filter="all">Todos</button>
                                <button class="filter-btn" data-filter="alive">Vivo</button>
                                <button class="filter-btn" data-filter="dead">Muerto</button>
                                <button class="filter-btn" data-filter="unknown">Desconocido</button>
                            </div>
                        </div>
                        
                        <div class="filter-group">
                            <label>Especie:</label>
                            <div class="filter-buttons">
                                <button class="filter-btn active" data-species="all">Todas</button>
                                <button class="filter-btn" data-species="human">Humano</button>
                                <button class="filter-btn" data-species="alien">Alienígena</button>
                                <button class="filter-btn" data-species="humanoid">Humanoide</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Characters Grid -->
            <div class="characters-container">
                <div class="container">
                    <div id="charactersGrid" class="characters-grid"></div>
                    
                    <!-- Loading -->
                    <div id="loading" class="loading-container">
                        <div class="portal-loader">
                            <div class="portal-ring"></div>
                            <div class="portal-ring"></div>
                            <div class="portal-ring"></div>
                        </div>
                        <p>Cargando personajes del multiverso...</p>
                    </div>
                    
                    <!-- Pagination -->
                    <div id="pagination" class="pagination-container"></div>
                    
                    <!-- No Results -->
                    <div id="noResults" class="no-results" style="display: none;">
                        <div class="no-results__icon">🌌</div>
                        <h3>No se encontraron personajes</h3>
                        <p>Intenta buscar en otra dimensión</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Character Modal -->
        <div id="characterModal" class="modal">
            <div class="modal__portal"></div>
            <div class="modal__content">
                <button class="modal__close" id="closeModal">×</button>
                <div class="modal__body" id="modalBody"></div>
            </div>
        </div>
    `}function c(e){return{Alive:`Vivo`,Dead:`Muerto`,unknown:`Desconocido`}[e]||e}function l(e){return{Human:`Humano`,Alien:`Alienígena`,Humanoid:`Humanoide`}[e]||e}function u(e){return{Male:`Masculino`,Female:`Femenino`,unknown:`Desconocido`}[e]||e}function d(){let e=1,t=1,i={status:`all`,species:`all`,name:``},a=document.getElementById(`charactersGrid`),o=document.getElementById(`loading`),s=document.getElementById(`pagination`),d=document.getElementById(`noResults`),p=document.getElementById(`characterSearch`),m=document.getElementById(`characterModal`),h=document.getElementById(`closeModal`);async function g(e=1,t=i){x(),w();try{let r;r=t.name?await n.getCharactersByName(t.name,e):await n.getAllCharacters(e);let i=r.results;t.status!==`all`&&(i=i.filter(e=>e.status.toLowerCase()===t.status)),t.species!==`all`&&(i=i.filter(e=>e.species.toLowerCase()===t.species)),_(i),y(r.info,e),i.length===0&&C()}catch(e){console.error(`Error loading characters:`,e),C()}finally{S()}}function _(e){a.innerHTML=``,e.forEach(e=>{let t=r(e,v);a.appendChild(t)})}function v(e){let t=document.getElementById(`modalBody`);t.innerHTML=`
            <div class="character-detail">
                <div class="character-detail__image">
                    <img src="${e.image}" alt="${e.name}">
                    <div class="character-detail__badges">
                        <span class="badge status-${e.status.toLowerCase()}">${c(e.status)}</span>
                        <span class="badge species">${l(e.species)}</span>
                        <span class="badge gender-${e.gender.toLowerCase()}">${u(e.gender)}</span>
                    </div>
                </div>
                
                <div class="character-detail__info">
                    <h2>${e.name}</h2>
                    
                    <div class="detail-section">
                        <h3>Información</h3>
                        <div class="detail-grid">
                            <div class="detail-item">
                                <span class="detail-label">Estado</span>
                                <span class="detail-value status-${e.status.toLowerCase()}">
                                    ${c(e.status)}
                                </span>
                            </div>
                            <div class="detail-item">
                                <span class="detail-label">Especie</span>
                                <span class="detail-value">${l(e.species)}</span>
                            </div>
                            <div class="detail-item">
                                <span class="detail-label">Género</span>
                                <span class="detail-value gender-${e.gender.toLowerCase()}">
                                    ${u(e.gender)}
                                </span>
                            </div>
                            <div class="detail-item">
                                <span class="detail-label">Origen</span>
                                <span class="detail-value">${e.origin.name}</span>
                            </div>
                            <div class="detail-item">
                                <span class="detail-label">Ubicación</span>
                                <span class="detail-value">${e.location.name}</span>
                            </div>
                            <div class="detail-item">
                                <span class="detail-label">Dimensión</span>
                                <span class="detail-value">C-137</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h3>Apariciones</h3>
                        <p>Este personaje aparece en ${e.episode.length} episodios</p>
                    </div>
                </div>
            </div>
        `,m.style.display=`block`,setTimeout(()=>m.classList.add(`show`),10)}function y(e,n){if(!e||!e.pages){s.innerHTML=``;return}if(t=e.pages,s.innerHTML=``,n>1){let e=b(`← Anterior`,n-1);s.appendChild(e)}let r=Math.max(1,n-2),i=Math.min(t,n+2);for(let e=r;e<=i;e++){let t=b(e,e,e===n);s.appendChild(t)}if(n<t){let e=b(`Siguiente →`,n+1);s.appendChild(e)}}function b(t,n,r=!1){let a=document.createElement(`button`);return a.className=`pagination-btn ${r?`active`:``}`,a.textContent=t,a.addEventListener(`click`,()=>{e=n,g(n,i),window.scrollTo({top:0,behavior:`smooth`})}),a}function x(){o.style.display=`flex`,a.style.display=`none`}function S(){o.style.display=`none`,a.style.display=`grid`}function C(){d.style.display=`block`,a.style.display=`none`}function w(){d.style.display=`none`,a.style.display=`grid`}p.addEventListener(`input`,f(t=>{i.name=t.target.value.trim(),e=1,g(e,i)},500)),document.querySelectorAll(`.filter-btn[data-filter]`).forEach(t=>{t.addEventListener(`click`,t=>{document.querySelectorAll(`.filter-btn[data-filter]`).forEach(e=>e.classList.remove(`active`)),t.target.classList.add(`active`),i.status=t.target.dataset.filter,e=1,g(e,i)})}),document.querySelectorAll(`.filter-btn[data-species]`).forEach(t=>{t.addEventListener(`click`,t=>{document.querySelectorAll(`.filter-btn[data-species]`).forEach(e=>e.classList.remove(`active`)),t.target.classList.add(`active`),i.species=t.target.dataset.species,e=1,g(e,i)})}),h.addEventListener(`click`,()=>{m.classList.remove(`show`),setTimeout(()=>m.style.display=`none`,300)}),m.addEventListener(`click`,e=>{e.target===m&&(m.classList.remove(`show`),setTimeout(()=>m.style.display=`none`,300))}),g(e)}function f(e,t){let n;return function(...r){clearTimeout(n),n=setTimeout(()=>{clearTimeout(n),e(...r)},t)}}function p(){return`
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
    `}function m(){console.log(`✅ Navbar inicializado`);let e=document.getElementById(`navbarToggle`);document.querySelector(`.navbar`);let t=document.querySelector(`.navbar__menu`);e&&window.innerWidth<=768&&(e.style.display=`flex`,t.style.display=`none`,e.addEventListener(`click`,()=>{let e=t.style.display===`flex`;t.style.display=e?`none`:`flex`,t.style.position=`absolute`,t.style.top=`100%`,t.style.left=`0`,t.style.width=`100%`,t.style.background=`#0a0a1f`,t.style.flexDirection=`column`,t.style.padding=`20px`})),document.addEventListener(`click`,e=>{e.target.closest(`.navbar__link`)&&window.innerWidth<=768&&(t.style.display=`none`)})}var h=`https://rickandmortyapi.com/api/episode`,g=class{static async getAllEpisodes(e=1){try{let t=await fetch(`${h}?page=${e}`);if(!t.ok)throw Error(`Error fetching episodes`);return await t.json()}catch(e){throw console.error(`Error fetching episodes:`,e),e}}static async getEpisodeById(e){try{let t=await fetch(`${h}/${e}`);if(!t.ok)throw Error(`Episode not found`);return await t.json()}catch(e){throw console.error(`Error fetching episode:`,e),e}}static async getEpisodesByName(e,t=1){try{let n=await fetch(`${h}?name=${e}&page=${t}`);if(!n.ok)throw Error(`Episode not found`);return await n.json()}catch(e){throw console.error(`Error searching episodes:`,e),e}}};function _(){return`
        <section class="episodes-page">
            <!-- Header Section -->
            <div class="episodes-header">
                <div class="container">
                    <h1 class="episodes-title">EPISODIOS</h1>
                    <p class="episodes-subtitle">Todos los episodios de Rick and Morty</p>
                    
                    <!-- Search Bar -->
                    <div class="search-container">
                        <div class="search-box">
                            <input type="text" id="episodeSearch" class="search-input" placeholder="Buscar episodio por nombre...">
                            <div class="search-icon">🔍</div>
                            <div class="search-portal"></div>
                        </div>
                    </div>
                    
                    <!-- Filters -->
                    <div class="filters-container">
                        <div class="filter-group">
                            <label>Temporada:</label>
                            <div class="filter-buttons">
                                <button class="filter-btn active" data-season="all">Todas</button>
                                <button class="filter-btn" data-season="1">Temp 1</button>
                                <button class="filter-btn" data-season="2">Temp 2</button>
                                <button class="filter-btn" data-season="3">Temp 3</button>
                                <button class="filter-btn" data-season="4">Temp 4</button>
                                <button class="filter-btn" data-season="5">Temp 5</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Episodes Grid -->
            <div class="episodes-container">
                <div class="container">
                    <div id="episodesGrid" class="episodes-grid"></div>
                    
                    <!-- Loading -->
                    <div id="loading" class="loading-container">
                        <div class="portal-loader">
                            <div class="portal-ring"></div>
                            <div class="portal-ring"></div>
                            <div class="portal-ring"></div>
                        </div>
                        <p>Cargando episodios del multiverso...</p>
                    </div>
                    
                    <!-- Pagination -->
                    <div id="pagination" class="pagination-container"></div>
                    
                    <!-- No Results -->
                    <div id="noResults" class="no-results" style="display: none;">
                        <div class="no-results__icon">📺</div>
                        <h3>No se encontraron episodios</h3>
                        <p>Intenta buscar en otra temporada</p>
                    </div>
                </div>
            </div>
        </section>
    `}function v(){let e=1,t=1,n={season:`all`,name:``},r=document.getElementById(`episodesGrid`),i=document.getElementById(`loading`),a=document.getElementById(`pagination`),o=document.getElementById(`noResults`),s=document.getElementById(`episodeSearch`);async function c(e=1,t=n){m(),v();try{let n;n=t.name?await g.getEpisodesByName(t.name,e):await g.getAllEpisodes(e);let r=n.results;t.season!==`all`&&(r=r.filter(e=>e.episode.startsWith(`S${t.season.padStart(2,`0`)}`))),l(r),f(n.info,e),r.length===0&&_()}catch(e){console.error(`Error loading episodes:`,e),_()}finally{h()}}function l(e){r.innerHTML=``,e.forEach(e=>{let t=u(e);r.appendChild(t)})}function u(e){let t=document.createElement(`div`);t.className=`episode-card`;let n=e.episode.substring(1,3),r=e.episode.substring(4);return t.innerHTML=`
            <div class="episode-card__inner">
                <div class="episode-card__header">
                    <div class="episode-badge">Temporada ${parseInt(n)}</div>
                    <div class="episode-number">Episodio ${r}</div>
                </div>
                
                <div class="episode-card__content">
                    <h3 class="episode-card__name">${e.name}</h3>
                    <div class="episode-card__info">
                        <div class="info-item">
                            <span class="info-label">Código:</span>
                            <span class="info-value">${e.episode}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Fecha de emisión:</span>
                            <span class="info-value">${d(e.air_date)}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Personajes:</span>
                            <span class="info-value">${e.characters.length} personajes</span>
                        </div>
                    </div>
                </div>
                
                <div class="episode-card__footer">
                    <span class="episode-id">Episodio #${e.id}</span>
                </div>
            </div>
        `,t}function d(e){return new Date(e).toLocaleDateString(`es-ES`,{year:`numeric`,month:`long`,day:`numeric`})}function f(e,n){if(!e||!e.pages){a.innerHTML=``;return}if(t=e.pages,a.innerHTML=``,n>1){let e=p(`← Anterior`,n-1);a.appendChild(e)}let r=Math.max(1,n-2),i=Math.min(t,n+2);for(let e=r;e<=i;e++){let t=p(e,e,e===n);a.appendChild(t)}if(n<t){let e=p(`Siguiente →`,n+1);a.appendChild(e)}}function p(t,r,i=!1){let a=document.createElement(`button`);return a.className=`pagination-btn ${i?`active`:``}`,a.textContent=t,a.addEventListener(`click`,()=>{e=r,c(r,n),window.scrollTo({top:0,behavior:`smooth`})}),a}function m(){i.style.display=`flex`,r.style.display=`none`}function h(){i.style.display=`none`,r.style.display=`grid`}function _(){o.style.display=`block`,r.style.display=`none`}function v(){o.style.display=`none`,r.style.display=`grid`}s.addEventListener(`input`,y(t=>{n.name=t.target.value.trim(),e=1,c(e,n)},500)),document.querySelectorAll(`.filter-btn[data-season]`).forEach(t=>{t.addEventListener(`click`,t=>{document.querySelectorAll(`.filter-btn[data-season]`).forEach(e=>e.classList.remove(`active`)),t.target.classList.add(`active`),n.season=t.target.dataset.season,e=1,c(e,n)})}),c(e)}function y(e,t){let n;return function(...r){clearTimeout(n),n=setTimeout(()=>{clearTimeout(n),e(...r)},t)}}var b=`https://rickandmortyapi.com/api/location`,x=class{static async getAllLocations(e=1){try{let t=await fetch(`${b}?page=${e}`);if(!t.ok)throw Error(`Error fetching locations`);return await t.json()}catch(e){throw console.error(`Error fetching locations:`,e),e}}static async getLocationById(e){try{let t=await fetch(`${b}/${e}`);if(!t.ok)throw Error(`Location not found`);return await t.json()}catch(e){throw console.error(`Error fetching location:`,e),e}}static async getLocationsByName(e,t=1){try{let n=await fetch(`${b}?name=${e}&page=${t}`);if(!n.ok)throw Error(`Location not found`);return await n.json()}catch(e){throw console.error(`Error searching locations:`,e),e}}};function S(){return`
        <section class="locations-page">
            <!-- Header Section -->
            <div class="locations-header">
                <div class="container">
                    <h1 class="locations-title">UBICACIONES</h1>
                    <p class="locations-subtitle">Planetas y dimensiones del multiverso</p>
                    
                    <!-- Search Bar -->
                    <div class="search-container">
                        <div class="search-box">
                            <input type="text" id="locationSearch" class="search-input" placeholder="Buscar ubicación por nombre...">
                            <div class="search-icon">🔍</div>
                            <div class="search-portal"></div>
                        </div>
                    </div>
                    
                    <!-- Filters -->
                    <div class="filters-container">
                        <div class="filter-group">
                            <label>Tipo:</label>
                            <div class="filter-buttons">
                                <button class="filter-btn active" data-type="all">Todos</button>
                                <button class="filter-btn" data-type="planet">Planeta</button>
                                <button class="filter-btn" data-type="space station">Estación Espacial</button>
                                <button class="filter-btn" data-type="cluster">Cluster</button>
                                <button class="filter-btn" data-type="microverse">Microverso</button>
                            </div>
                        </div>
                        
                        <div class="filter-group">
                            <label>Dimensión:</label>
                            <div class="filter-buttons">
                                <button class="filter-btn active" data-dimension="all">Todas</button>
                                <button class="filter-btn" data-dimension="Dimension C-137">C-137</button>
                                <button class="filter-btn" data-dimension="unknown">Desconocida</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Locations Grid -->
            <div class="locations-container">
                <div class="container">
                    <div id="locationsGrid" class="locations-grid"></div>
                    
                    <!-- Loading -->
                    <div id="loading" class="loading-container">
                        <div class="portal-loader">
                            <div class="portal-ring"></div>
                            <div class="portal-ring"></div>
                            <div class="portal-ring"></div>
                        </div>
                        <p>Cargando ubicaciones del multiverso...</p>
                    </div>
                    
                    <!-- Pagination -->
                    <div id="pagination" class="pagination-container"></div>
                    
                    <!-- No Results -->
                    <div id="noResults" class="no-results" style="display: none;">
                        <div class="no-results__icon">🌌</div>
                        <h3>No se encontraron ubicaciones</h3>
                        <p>Intenta buscar en otra dimensión</p>
                    </div>
                </div>
            </div>
        </section>
    `}function C(){let e=1,t=1,n={type:`all`,dimension:`all`,name:``},r=document.getElementById(`locationsGrid`),i=document.getElementById(`loading`),a=document.getElementById(`pagination`),o=document.getElementById(`noResults`),s=document.getElementById(`locationSearch`);async function c(e=1,t=n){m(),_();try{let n;n=t.name?await x.getLocationsByName(t.name,e):await x.getAllLocations(e);let r=n.results;t.type!==`all`&&(r=r.filter(e=>e.type.toLowerCase()===t.type.toLowerCase())),t.dimension!==`all`&&(r=r.filter(e=>e.dimension===t.dimension)),l(r),f(n.info,e),r.length===0&&g()}catch(e){console.error(`Error loading locations:`,e),g()}finally{h()}}function l(e){r.innerHTML=``,e.forEach(e=>{let t=u(e);r.appendChild(t)})}function u(e){let t=document.createElement(`div`);return t.className=`location-card`,t.innerHTML=`
            <div class="location-card__inner">
                <div class="location-card__header">
                    <div class="location-type">${e.type||`Desconocido`}</div>
                    <div class="location-id">#${e.id}</div>
                </div>
                
                <div class="location-card__content">
                    <h3 class="location-card__name">${e.name}</h3>
                    <div class="location-card__info">
                        <div class="info-item">
                            <span class="info-label">Tipo:</span>
                            <span class="info-value">${e.type||`Desconocido`}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Dimensión:</span>
                            <span class="info-value">${e.dimension||`Desconocida`}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Residentes:</span>
                            <span class="info-value">${e.residents.length} residentes</span>
                        </div>
                    </div>
                </div>
                
                <div class="location-card__footer">
                    <div class="location-dimension">
                        ${d(e.dimension)}
                        <span>${e.dimension||`Dimensión desconocida`}</span>
                    </div>
                </div>
            </div>
        `,t}function d(e){return e===`Dimension C-137`?`🔬`:e===`unknown`?`❓`:e.includes(`Dimension`)?`🌌`:`🪐`}function f(e,n){if(!e||!e.pages){a.innerHTML=``;return}if(t=e.pages,a.innerHTML=``,n>1){let e=p(`← Anterior`,n-1);a.appendChild(e)}let r=Math.max(1,n-2),i=Math.min(t,n+2);for(let e=r;e<=i;e++){let t=p(e,e,e===n);a.appendChild(t)}if(n<t){let e=p(`Siguiente →`,n+1);a.appendChild(e)}}function p(t,r,i=!1){let a=document.createElement(`button`);return a.className=`pagination-btn ${i?`active`:``}`,a.textContent=t,a.addEventListener(`click`,()=>{e=r,c(r,n),window.scrollTo({top:0,behavior:`smooth`})}),a}function m(){i.style.display=`flex`,r.style.display=`none`}function h(){i.style.display=`none`,r.style.display=`grid`}function g(){o.style.display=`block`,r.style.display=`none`}function _(){o.style.display=`none`,r.style.display=`grid`}s.addEventListener(`input`,w(t=>{n.name=t.target.value.trim(),e=1,c(e,n)},500)),document.querySelectorAll(`.filter-btn[data-type]`).forEach(t=>{t.addEventListener(`click`,t=>{document.querySelectorAll(`.filter-btn[data-type]`).forEach(e=>e.classList.remove(`active`)),t.target.classList.add(`active`),n.type=t.target.dataset.type,e=1,c(e,n)})}),document.querySelectorAll(`.filter-btn[data-dimension]`).forEach(t=>{t.addEventListener(`click`,t=>{document.querySelectorAll(`.filter-btn[data-dimension]`).forEach(e=>e.classList.remove(`active`)),t.target.classList.add(`active`),n.dimension=t.target.dataset.dimension,e=1,c(e,n)})}),c(e)}function w(e,t){let n;return function(...r){clearTimeout(n),n=setTimeout(()=>{clearTimeout(n),e(...r)},t)}}console.log(`🚀 App iniciando...`),document.addEventListener(`DOMContentLoaded`,function(){console.log(`✅ DOM cargado`),D(),O(),k()});function T(){console.log(`📺 Cargando página de episodios...`);let e=document.getElementById(`app`);e.innerHTML=_(),window.location.hash=`/episodios`,M(`/episodios`),setTimeout(()=>{v()},100)}function E(){console.log(`🌍 Cargando página de ubicaciones...`);let e=document.getElementById(`app`);e.innerHTML=S(),window.location.hash=`/ubicaciones`,M(`/ubicaciones`),setTimeout(()=>{C()},100)}function D(){let e=document.createElement(`header`);e.innerHTML=p(),document.body.insertBefore(e,document.body.firstChild),m()}function O(){let e=window.location.hash;console.log(`📍 Ruta inicial:`,e),e===`#/personajes`?j():A()}function k(){document.addEventListener(`click`,function(e){if(e.target.closest(`[data-route]`)){e.preventDefault();let t=e.target.closest(`[data-route]`).getAttribute(`data-route`);t===`/personajes`?j():t===`/episodios`?T():t===`/ubicaciones`?E():t===`/`&&A()}})}function A(){console.log(`🏠 Cargando página de inicio...`);let t=document.getElementById(`app`);t.innerHTML=e(),window.location.hash=`/`,M(`/`)}function j(){console.log(`👥 Cargando página de personajes...`);let e=document.getElementById(`app`);e.innerHTML=s(),window.location.hash=`/personajes`,M(`/personajes`),setTimeout(()=>{d()},100)}function M(e){document.querySelectorAll(`.navbar__link`).forEach(t=>{t.getAttribute(`data-route`)===e?t.classList.add(`navbar__link--active`):t.classList.remove(`navbar__link--active`)})}var N=document.createElement(`style`);N.textContent=`
    @keyframes portalSpin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    .navbar__link--active {
        background: rgba(0, 255, 136, 0.1) !important;
        color: #00ff88 !important;
    }
`,document.head.appendChild(N),console.log(`🎯 Router configurado correctamente`);