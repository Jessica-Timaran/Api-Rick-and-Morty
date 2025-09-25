export function renderHome() {
    return `
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
    `;
}

// Función para inicializar eventos del home (si es necesario)
export function initHome() {
    console.log('🏠 Home inicializado');
    
    // Configurar eventos de los botones
    setTimeout(() => {
        const buttons = document.querySelectorAll('[data-route]');
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const route = this.getAttribute('data-route');
                // La navegación se maneja en main.js
                console.log('Navegando a:', route);
            });
        });
    }, 100);
}