export function createCharacterCard(character, onCardClick) {
    const card = document.createElement('div');
    card.className = 'character-card';
    card.innerHTML = `
        <div class="character-card__inner">
            <div class="character-card__image-container">
                <img src="${character.image}" alt="${character.name}" class="character-card__image">
                <div class="character-card__status ${character.status.toLowerCase()}">
                    <span class="status-indicator"></span>
                    ${translateStatus(character.status)} - ${translateSpecies(character.species)}
                </div>
            </div>
            
            <div class="character-card__content">
                <h3 class="character-card__name">${character.name}</h3>
                <div class="character-card__info">
                    <div class="info-item">
                        <span class="info-label">Última ubicación:</span>
                        <span class="info-value">${character.location.name}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Primera vez visto en:</span>
                        <span class="info-value">${character.origin.name}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Género:</span>
                        <span class="info-value ${character.gender.toLowerCase()}">${translateGender(character.gender)}</span>
                    </div>
                </div>
            </div>
            
            <div class="character-card__hover">
                <span>Click para detalles</span>
                <div class="portal-effect"></div>
            </div>
        </div>
    `;

    card.addEventListener('click', () => onCardClick(character));
    
    return card;
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