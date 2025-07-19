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

document.addEventListener('DOMContentLoaded', function () {
    const sortSelect = document.getElementById('dishes-sort-select');
    if (!sortSelect) return;

    sortSelect.addEventListener('change', function () {
        if (sortSelect.value === 'default') {
            sortDishesByIdNumber('dish-curry-container');
            sortDishesByIdNumber('dish-salads-container');
            sortDishesByIdNumber('dish-desserts-container');
        } else if (sortSelect.value === 'strength') {
            sortDishesInContainer('dish-curry-container');
            sortDishesInContainer('dish-salads-container');
            sortDishesInContainer('dish-desserts-container');
        }
    });
});
