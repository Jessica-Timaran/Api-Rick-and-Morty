import { LocationsAPI } from '../api/locations.js';

export function renderLocations() {
    return `
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
    `;
}

export function initLocations() {
    let currentPage = 1;
    let totalPages = 1;
    let currentFilters = {
        type: 'all',
        dimension: 'all',
        name: ''
    };

    const locationsGrid = document.getElementById('locationsGrid');
    const loading = document.getElementById('loading');
    const pagination = document.getElementById('pagination');
    const noResults = document.getElementById('noResults');
    const searchInput = document.getElementById('locationSearch');

    // ubicacion de carga
    async function loadLocations(page = 1, filters = currentFilters) {
        showLoading();
        hideNoResults();
        
        try {
            let data;
            if (filters.name) {
                data = await LocationsAPI.getLocationsByName(filters.name, page);
            } else {
                data = await LocationsAPI.getAllLocations(page);
            }
            
            // Aplicar filtro
            let filteredLocations = data.results;
            if (filters.type !== 'all') {
                filteredLocations = filteredLocations.filter(location => 
                    location.type.toLowerCase() === filters.type.toLowerCase()
                );
            }
            if (filters.dimension !== 'all') {
                filteredLocations = filteredLocations.filter(location => 
                    location.dimension === filters.dimension
                );
            }
            
            displayLocations(filteredLocations);
            setupPagination(data.info, page);
            
            if (filteredLocations.length === 0) {
                showNoResults();
            }
            
        } catch (error) {
            console.error('Error loading locations:', error);
            showNoResults();
        } finally {
            hideLoading();
        }
    }

    function displayLocations(locations) {
        locationsGrid.innerHTML = '';
        locations.forEach(location => {
            const card = createLocationCard(location);
            locationsGrid.appendChild(card);
        });
    }

    function createLocationCard(location) {
        const card = document.createElement('div');
        card.className = 'location-card';
        
        card.innerHTML = `
            <div class="location-card__inner">
                <div class="location-card__header">
                    <div class="location-type">${location.type || 'Desconocido'}</div>
                    <div class="location-id">#${location.id}</div>
                </div>
                
                <div class="location-card__content">
                    <h3 class="location-card__name">${location.name}</h3>
                    <div class="location-card__info">
                        <div class="info-item">
                            <span class="info-label">Tipo:</span>
                            <span class="info-value">${location.type || 'Desconocido'}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Dimensión:</span>
                            <span class="info-value">${location.dimension || 'Desconocida'}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Residentes:</span>
                            <span class="info-value">${location.residents.length} residentes</span>
                        </div>
                    </div>
                </div>
                
                <div class="location-card__footer">
                    <div class="location-dimension">
                        ${getDimensionIcon(location.dimension)}
                        <span>${location.dimension || 'Dimensión desconocida'}</span>
                    </div>
                </div>
            </div>
        `;
        
        return card;
    }

    function getDimensionIcon(dimension) {
        if (dimension === 'Dimension C-137') return '🔬';
        if (dimension === 'unknown') return '❓';
        if (dimension.includes('Dimension')) return '🌌';
        return '🪐';
    }

    function setupPagination(info, currentPage) {
        if (!info || !info.pages) {
            pagination.innerHTML = '';
            return;
        }
        
        totalPages = info.pages;
        pagination.innerHTML = '';
        
        // boton anterior
        if (currentPage > 1) {
            const prevBtn = createPaginationButton('← Anterior', currentPage - 1);
            pagination.appendChild(prevBtn);
        }
        
        // numero de pagina
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
            loadLocations(page, currentFilters);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        return button;
    }

    function showLoading() {
        loading.style.display = 'flex';
        locationsGrid.style.display = 'none';
    }

    function hideLoading() {
        loading.style.display = 'none';
        locationsGrid.style.display = 'grid';
    }

    function showNoResults() {
        noResults.style.display = 'block';
        locationsGrid.style.display = 'none';
    }

    function hideNoResults() {
        noResults.style.display = 'none';
        locationsGrid.style.display = 'grid';
    }

    // Event listeners
    searchInput.addEventListener('input', debounce((e) => {
        currentFilters.name = e.target.value.trim();
        currentPage = 1;
        loadLocations(currentPage, currentFilters);
    }, 500));

    // Filtros botones
    document.querySelectorAll('.filter-btn[data-type]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn[data-type]').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilters.type = e.target.dataset.type;
            currentPage = 1;
            loadLocations(currentPage, currentFilters);
        });
    });

    document.querySelectorAll('.filter-btn[data-dimension]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn[data-dimension]').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilters.dimension = e.target.dataset.dimension;
            currentPage = 1;
            loadLocations(currentPage, currentFilters);
        });
    });

    // carga inicial
    loadLocations(currentPage);
}

// funcion antirrebote
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