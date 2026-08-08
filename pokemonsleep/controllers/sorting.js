// Sort function to sort dishes by strength
function sortDishesInContainer(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Get all dish divs
    const dishes = Array.from(container.getElementsByClassName('cls-dish-recipe'));

    // Sort by dish power (convert to number, remove commas)
    dishes.sort((a, b) => {
        const powerA = Number(a.querySelector('.cls-dish-power').textContent.replace(/,/g, ''));
        const powerB = Number(b.querySelector('.cls-dish-power').textContent.replace(/,/g, ''));
        return powerB - powerA; // Descending
    });

    // Re-append sorted dishes
    dishes.forEach(dish => container.appendChild(dish));
}

function sortDishesByTotalIngredients(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const dishes = Array.from(container.getElementsByClassName('cls-dish-recipe'));

    dishes.sort((a, b) => {
        const totalIngredientsA = Number(a.dataset.totalIngredients || '0');
        const totalIngredientsB = Number(b.dataset.totalIngredients || '0');
        return totalIngredientsB - totalIngredientsA;
    });

    dishes.forEach(dish => container.appendChild(dish));
}

function sortDishesByIdNumber(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const dishes = Array.from(container.getElementsByClassName('cls-dish-recipe'));

    dishes.sort((a, b) => {
        // Extract number from id (e.g., dish-salads-21 -> 21)
        const numA = parseInt(a.id.match(/\d+$/)?.[0] || '0', 10);
        const numB = parseInt(b.id.match(/\d+$/)?.[0] || '0', 10);
        return numA - numB; // Ascending
    });

    dishes.forEach(dish => container.appendChild(dish));
}

function toggleDishMetricDisplay(showTotalIngredients) {
    const dishPowerElems = document.getElementsByClassName('cls-dish-power');
    const totalIngredientsElems = document.getElementsByClassName('cls-dish-total-ingredients');

    for (const elem of dishPowerElems) {
        elem.classList.toggle('cls-dish-metric-hidden', showTotalIngredients);
    }

    for (const elem of totalIngredientsElems) {
        elem.classList.toggle('cls-dish-metric-hidden', !showTotalIngredients);
    }
}

function applyDishSort(sortOrder) {
    const containerIds = [
        'dish-curry-container',
        'dish-salads-container',
        'dish-desserts-container',
    ];

    if (sortOrder === 'strength') {
        containerIds.forEach(sortDishesInContainer);
        toggleDishMetricDisplay(false);
        return;
    }

    if (sortOrder === 'total-ingredients') {
        containerIds.forEach(sortDishesByTotalIngredients);
        toggleDishMetricDisplay(true);
        return;
    }

    containerIds.forEach(sortDishesByIdNumber);
    toggleDishMetricDisplay(false);
}

document.addEventListener('DOMContentLoaded', function () {
    const sortSelect = document.getElementById('dishes-sort-select');
    if (!sortSelect) return;

    sortSelect.addEventListener('change', function () {
        applyDishSort(sortSelect.value);
    });

    applyDishSort(sortSelect.value);
});
