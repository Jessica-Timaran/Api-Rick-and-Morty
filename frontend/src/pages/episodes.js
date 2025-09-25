import { EpisodesAPI } from '../api/episodes.js';

export function renderEpisodes() {
    return `
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
    `;
}

export function initEpisodes() {
    let currentPage = 1;
    let totalPages = 1;
    let currentFilters = {
        season: 'all',
        name: ''
    };

    const episodesGrid = document.getElementById('episodesGrid');
    const loading = document.getElementById('loading');
    const pagination = document.getElementById('pagination');
    const noResults = document.getElementById('noResults');
    const searchInput = document.getElementById('episodeSearch');

    // cargar episodios
    async function loadEpisodes(page = 1, filters = currentFilters) {
        showLoading();
        hideNoResults();
        
        try {
            let data;
            if (filters.name) {
                data = await EpisodesAPI.getEpisodesByName(filters.name, page);
            } else {
                data = await EpisodesAPI.getAllEpisodes(page);
            }
            
            // Aplicar filtro de temporada
            let filteredEpisodes = data.results;
            if (filters.season !== 'all') {
                filteredEpisodes = filteredEpisodes.filter(episode => 
                    episode.episode.startsWith(`S${filters.season.padStart(2, '0')}`)
                );
            }
            
            displayEpisodes(filteredEpisodes);
            setupPagination(data.info, page);
            
            if (filteredEpisodes.length === 0) {
                showNoResults();
            }
            
        } catch (error) {
            console.error('Error loading episodes:', error);
            showNoResults();
        } finally {
            hideLoading();
        }
    }

    function displayEpisodes(episodes) {
        episodesGrid.innerHTML = '';
        episodes.forEach(episode => {
            const card = createEpisodeCard(episode);
            episodesGrid.appendChild(card);
        });
    }

    function createEpisodeCard(episode) {
        const card = document.createElement('div');
        card.className = 'episode-card';
        
        // Extraer temporada y número de episodio
        const season = episode.episode.substring(1, 3);
        const episodeNum = episode.episode.substring(4);
        
        card.innerHTML = `
            <div class="episode-card__inner">
                <div class="episode-card__header">
                    <div class="episode-badge">Temporada ${parseInt(season)}</div>
                    <div class="episode-number">Episodio ${episodeNum}</div>
                </div>
                
                <div class="episode-card__content">
                    <h3 class="episode-card__name">${episode.name}</h3>
                    <div class="episode-card__info">
                        <div class="info-item">
                            <span class="info-label">Código:</span>
                            <span class="info-value">${episode.episode}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Fecha de emisión:</span>
                            <span class="info-value">${formatDate(episode.air_date)}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Personajes:</span>
                            <span class="info-value">${episode.characters.length} personajes</span>
                        </div>
                    </div>
                </div>
                
                <div class="episode-card__footer">
                    <span class="episode-id">Episodio #${episode.id}</span>
                </div>
            </div>
        `;
        
        return card;
    }

    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', options);
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
        
        // numero de paginas
        const startPage = Math.max(1, currentPage - 2);
        const endPage = Math.min(totalPages, currentPage + 2);
        
        for (let i = startPage; i <= endPage; i++) {
            const pageBtn = createPaginationButton(i, i, i === currentPage);
            pagination.appendChild(pageBtn);
        }
        
        // Boton siguiente
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
            loadEpisodes(page, currentFilters);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        return button;
    }

    function showLoading() {
        loading.style.display = 'flex';
        episodesGrid.style.display = 'none';
    }

    function hideLoading() {
        loading.style.display = 'none';
        episodesGrid.style.display = 'grid';
    }

    function showNoResults() {
        noResults.style.display = 'block';
        episodesGrid.style.display = 'none';
    }

    function hideNoResults() {
        noResults.style.display = 'none';
        episodesGrid.style.display = 'grid';
    }

    // Event listeners
    searchInput.addEventListener('input', debounce((e) => {
        currentFilters.name = e.target.value.trim();
        currentPage = 1;
        loadEpisodes(currentPage, currentFilters);
    }, 500));

    // botones de filtro de temporada
    document.querySelectorAll('.filter-btn[data-season]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn[data-season]').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilters.season = e.target.dataset.season;
            currentPage = 1;
            loadEpisodes(currentPage, currentFilters);
        });
    });

    // carga inicial
    loadEpisodes(currentPage);
}

// Debounce function
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