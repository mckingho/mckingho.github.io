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

// Example usage:
sortDishesInContainer('dish-curry-container');
sortDishesInContainer('dish-salads-container');
sortDishesInContainer('dish-desserts-container');
