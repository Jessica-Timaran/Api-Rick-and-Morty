import { CharactersAPI } from '../api/characters.js';
import { createCharacterCard } from '../components/card.js';

export function renderCharacters() {
    return `
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
    `;
}

// Funciones de traducción
function translateStatus(status) {
    const translations = {
        'Alive': 'Vivo',
        'Dead': 'Muerto',
        'unknown': 'Desconocido'
    };
    return translations[status] || status;
}

function translateSpecies(species) {
    const translations = {
        'Human': 'Humano',
        'Alien': 'Alienígena',
        'Humanoid': 'Humanoide'
    };
    return translations[species] || species;
}

function translateGender(gender) {
    const translations = {
        'Male': 'Masculino',
        'Female': 'Femenino',
        'unknown': 'Desconocido'
    };
    return translations[gender] || gender;
}

// Función initCharacters que faltaba exportar
export function initCharacters() {
    let currentPage = 1;
    let totalPages = 1;
    let currentFilters = {
        status: 'all',
        species: 'all',
        name: ''
    };

    const charactersGrid = document.getElementById('charactersGrid');
    const loading = document.getElementById('loading');
    const pagination = document.getElementById('pagination');
    const noResults = document.getElementById('noResults');
    const searchInput = document.getElementById('characterSearch');
    const modal = document.getElementById('characterModal');
    const closeModal = document.getElementById('closeModal');

    // Load characters
    async function loadCharacters(page = 1, filters = currentFilters) {
        showLoading();
        hideNoResults();
        
        try {
            let data;
            if (filters.name) {
                data = await CharactersAPI.getCharactersByName(filters.name, page);
            } else {
                data = await CharactersAPI.getAllCharacters(page);
            }
            
            // Apply filters
            let filteredCharacters = data.results;
            if (filters.status !== 'all') {
                filteredCharacters = filteredCharacters.filter(char => 
                    char.status.toLowerCase() === filters.status
                );
            }
            if (filters.species !== 'all') {
                filteredCharacters = filteredCharacters.filter(char => 
                    char.species.toLowerCase() === filters.species
                );
            }
            
            displayCharacters(filteredCharacters);
            setupPagination(data.info, page);
            
            if (filteredCharacters.length === 0) {
                showNoResults();
            }
            
        } catch (error) {
            console.error('Error loading characters:', error);
            showNoResults();
        } finally {
            hideLoading();
        }
    }

    function displayCharacters(characters) {
        charactersGrid.innerHTML = '';
        characters.forEach(character => {
            const card = createCharacterCard(character, showCharacterModal);
            charactersGrid.appendChild(card);
        });
    }

    function showCharacterModal(character) {
        const modalBody = document.getElementById('modalBody');
        modalBody.innerHTML = `
            <div class="character-detail">
                <div class="character-detail__image">
                    <img src="${character.image}" alt="${character.name}">
                    <div class="character-detail__badges">
                        <span class="badge status-${character.status.toLowerCase()}">${translateStatus(character.status)}</span>
                        <span class="badge species">${translateSpecies(character.species)}</span>
                        <span class="badge gender-${character.gender.toLowerCase()}">${translateGender(character.gender)}</span>
                    </div>
                </div>
                
                <div class="character-detail__info">
                    <h2>${character.name}</h2>
                    
                    <div class="detail-section">
                        <h3>Información</h3>
                        <div class="detail-grid">
                            <div class="detail-item">
                                <span class="detail-label">Estado</span>
                                <span class="detail-value status-${character.status.toLowerCase()}">
                                    ${translateStatus(character.status)}
                                </span>
                            </div>
                            <div class="detail-item">
                                <span class="detail-label">Especie</span>
                                <span class="detail-value">${translateSpecies(character.species)}</span>
                            </div>
                            <div class="detail-item">
                                <span class="detail-label">Género</span>
                                <span class="detail-value gender-${character.gender.toLowerCase()}">
                                    ${translateGender(character.gender)}
                                </span>
                            </div>
                            <div class="detail-item">
                                <span class="detail-label">Origen</span>
                                <span class="detail-value">${character.origin.name}</span>
                            </div>
                            <div class="detail-item">
                                <span class="detail-label">Ubicación</span>
                                <span class="detail-value">${character.location.name}</span>
                            </div>
                            <div class="detail-item">
                                <span class="detail-label">Dimensión</span>
                                <span class="detail-value">C-137</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h3>Apariciones</h3>
                        <p>Este personaje aparece en ${character.episode.length} episodios</p>
                    </div>
                </div>
            </div>
        `;
        
        modal.style.display = 'block';
        setTimeout(() => modal.classList.add('show'), 10);
    }

    function setupPagination(info, currentPage) {
        if (!info || !info.pages) {
            pagination.innerHTML = '';
            return;
        }
        
        totalPages = info.pages;
        pagination.innerHTML = '';
        
        // Boton anterior
        if (currentPage > 1) {
            const prevBtn = createPaginationButton('← Anterior', currentPage - 1);
            pagination.appendChild(prevBtn);
        }
        
        // Numero de paginas
        const startPage = Math.max(1, currentPage - 2);
        const endPage = Math.min(totalPages, currentPage + 2);
        
        for (let i = startPage; i <= endPage; i++) {
            const pageBtn = createPaginationButton(i, i, i === currentPage);
            pagination.appendChild(pageBtn);
        }
        
        // boton siguiente
        if (currentPage < totalPages) {
            const nextBtn = createPaginationButton('Siguiente →', currentPage + 1);
            pagination.appendChild(nextBtn);
        }
    }

    function createPaginationButton(text, page, isActive = false) {
        const button = document.createElement('button');
        button.className = `pagination-btn ${isActive ? 'active' : ''}`;
        button.textContent = text;
        button.addEventListener('click', () => {
            currentPage = page;
            loadCharacters(page, currentFilters);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        return button;
    }

    function showLoading() {
        loading.style.display = 'flex';
        charactersGrid.style.display = 'none';
    }

    function hideLoading() {
        loading.style.display = 'none';
        charactersGrid.style.display = 'grid';
    }

    function showNoResults() {
        noResults.style.display = 'block';
        charactersGrid.style.display = 'none';
    }

    function hideNoResults() {
        noResults.style.display = 'none';
        charactersGrid.style.display = 'grid';
    }

    // Event listeners
    searchInput.addEventListener('input', debounce((e) => {
        currentFilters.name = e.target.value.trim();
        currentPage = 1;
        loadCharacters(currentPage, currentFilters);
    }, 500));

    // Boton de filtro
    document.querySelectorAll('.filter-btn[data-filter]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn[data-filter]').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilters.status = e.target.dataset.filter;
            currentPage = 1;
            loadCharacters(currentPage, currentFilters);
        });
    });

    document.querySelectorAll('.filter-btn[data-species]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn[data-species]').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilters.species = e.target.dataset.species;
            currentPage = 1;
            loadCharacters(currentPage, currentFilters);
        });
    });

    // Modal events
    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => modal.style.display = 'none', 300);
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => modal.style.display = 'none', 300);
        }
    });

    // carga inicial
    loadCharacters(currentPage);
}

// funcion antirrebote para la busqueda
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}