import { ingredient_icons, recipes } from '../modules/ingredient.js'
import { lacking_ingredients } from '../modules/cooking.js'

const store = {
    ingredients: {
        leek: 0,
        mushroom: 0,
        egg: 0,
        potato: 0,
        apple: 0,
        herb: 0,
        sausage: 0,
        milk: 0,
        honey: 0,
        oil: 0,
        ginger: 0,
        tomato: 0,
        cacao: 0,
        tail: 0,
        soybeans: 0,
        corn: 0,
        coffee: 0,
        pumpkin: 0,
    },
    selectedType: 'dish-type-curry', // element ID
    dishesIgnoreCount: false,
};

function recipeIngredientsHtml(recipe, lacking = {}) {
    let html = '<span>';
    if (recipe?.ingredients) {
        recipe.ingredients.forEach((ingrCount) => {
            for (const [ingr, count] of Object.entries(ingrCount)) {
                if (lacking[ingr] > 0) {
                    html += `<span class="cls-lack-ingr">
                        ${ingredient_icons[ingr]} ${count} (-${lacking[ingr]})&nbsp;
                        </span>`;
                } else {
                    html += ingredient_icons[ingr] + ' ' + count + '&nbsp;';
                }
            }
        });
    }
    html += '</span>';
    return html;
}

function checkRecipes() {
    for (const [recipeKey, info] of Object.entries(recipes)) {
        const lacking = lacking_ingredients(info, store?.ingredients, store?.dishesIgnoreCount);
        // Find if close to ready to cook a dish also
        const closeReady = Object.values(lacking).every((ingrNum) => ingrNum <= 2);

        const dishElem = document.getElementById('dish-' + recipeKey);
        const dishPowerElem = document.getElementById('dish-power-' + recipeKey);
        if (Object.keys(lacking).length > 0) {
            dishPowerElem?.classList.remove('cls-dish-power-ready');
            dishElem?.classList.remove('cls-dish-recipe-ready');
            if (closeReady) {
                // close to ready to cook dish
                dishPowerElem?.classList.add('cls-dish-power-ready-close');
                dishElem?.classList.add('cls-dish-recipe-ready-close');
            } else {
                // ingredients are far from recipe
                dishPowerElem?.classList.remove('cls-dish-power-ready-close');
                dishElem?.classList.remove('cls-dish-recipe-ready-close');
            }
        } else {
            // ready to cook dish 
            dishPowerElem?.classList.remove('cls-dish-power-ready-close');
            dishElem?.classList.remove('cls-dish-recipe-ready-close');
            dishPowerElem?.classList.add('cls-dish-power-ready');
            dishElem?.classList.add('cls-dish-recipe-ready');
        }
        const html = recipeIngredientsHtml(info, lacking);
        const ingrElem = document.getElementById('ingr-' + recipeKey);
        if (ingrElem) {
            ingrElem.innerHTML = html;
        }
    }
}

function selectIngredientListeners() {
    const ingredients = Object.keys(store?.ingredients);
    const ingrTotalText = document.getElementById('ingredients-total-no');
    const setIngrTotalText = () => {
        const total = Object.values(store?.ingredients).reduce((a, b) => a + b, 0);
        if (ingrTotalText) {
            ingrTotalText.innerText = total;
        }
    };
    // select ingredients
    ingredients.forEach((ingr) => {
        const ingrNumText = document.getElementById('ingr-no-' + ingr);
        const setIngrNumText = (text) => {
            if (ingrNumText) {
                ingrNumText.innerHTML = text;
            }
        };
        const subBtn = document.getElementById('ingr-sub-' + ingr);
        subBtn?.addEventListener('click', (ev) => {
            ev.stopPropagation();
            if (store?.ingredients?.[ingr] >= 1) {
                store.ingredients[ingr] -= 1;
                setIngrNumText(store.ingredients[ingr]);
                setIngrTotalText();
                updateIngredientsSummary();
                checkRecipes();
            }
        });
        const sub5Btn = document.getElementById('ingr-sub5-' + ingr);
        sub5Btn?.addEventListener('click', (ev) => {
            ev.stopPropagation();
            if (store?.ingredients?.[ingr] >= 5) {
                store.ingredients[ingr] -= 5;
                setIngrNumText(store.ingredients[ingr]);
                setIngrTotalText();
                updateIngredientsSummary();
                checkRecipes();
            }
        });
        const add5Btn = document.getElementById('ingr-add5-' + ingr);
        add5Btn?.addEventListener('click', (ev) => {
            ev.stopPropagation();
            if (store?.ingredients?.[ingr] <= Number.MAX_SAFE_INTEGER - 5) {
                store.ingredients[ingr] += 5;
                setIngrNumText(store.ingredients[ingr]);
                setIngrTotalText();
                updateIngredientsSummary();
                checkRecipes();
            }
        });
        const addBtn = document.getElementById('ingr-add-' + ingr);
        addBtn?.addEventListener('click', () => {
            if (store?.ingredients?.[ingr] <= Number.MAX_SAFE_INTEGER - 1) {
                store.ingredients[ingr] += 1;
                setIngrNumText(store.ingredients[ingr]);
                setIngrTotalText();
                updateIngredientsSummary();
                checkRecipes();
            }
        });
    });
}

function resetIngredientsListener() {
    const resetBtn = document.getElementById('ingredients-reset');
    const ingrNoElems = document.getElementsByClassName('cls-ingr-no');
    const ingrTotalText = document.getElementById('ingredients-total-no');
    resetBtn.addEventListener('click', () => {
        Object.keys(store?.ingredients).forEach((ingr) => store.ingredients[ingr] = 0);
        for (let i = 0; i < ingrNoElems.length; i += 1) {
            ingrNoElems.item(i).innerHTML = 0;
        }
        if (ingrTotalText) {
            ingrTotalText.innerHTML = 0;
        }
        updateIngredientsSummary();
        checkRecipes();
    });
}

function updateIngredientsSummary() {
    let summary = '';
    Object.keys(store?.ingredients).forEach((ingr) => {
        if (store.ingredients[ingr] > 0) {
            summary += ingredient_icons[ingr] + ' ' + store.ingredients[ingr] + '&nbsp;';
        }
    });
    const summaryElem = document.getElementById('ingredients-summary');
    if (summaryElem) {
        summaryElem.innerHTML = summary;
    }
}

function toggleIngredientListener() {
    const toggle = document.getElementById('ingredients-toggle');
    toggle?.addEventListener('click', () => {
        const ingrCtr = document.getElementById('ingredients-container');
        if (ingrCtr?.style.display !== 'none') {
            ingrCtr.style.display = 'none';
            toggle.innerText = '[+]';
        } else {
            ingrCtr.style.display = 'flex';
            toggle.innerText = '[-]';
        }
    });
}

function typeListeners() {
    const handleRecipeDisplay = () => {
        const ctrIds = [
            'dish-curry-container',
            'dish-salads-container',
            'dish-desserts-container',
        ];
        for (const ctrId of ctrIds) {
            const container = document.getElementById(ctrId);
            if (
                (store?.selectedType === 'dish-type-curry' &&
                    ctrId === 'dish-curry-container') ||
                (store?.selectedType === 'dish-type-salads' &&
                    ctrId === 'dish-salads-container') ||
                (store?.selectedType === 'dish-type-desserts' &&
                    ctrId === 'dish-desserts-container')
            ) {
                container.classList.remove('cls-hide-dish-container');
            } else {
                container.classList.add('cls-hide-dish-container');
            }
        }
    };
    const setTypeListener = (selectedBtn) => {
        selectedBtn.addEventListener('click', () => {
            const typeBtns = document.getElementsByClassName('cls-dish-type');
            for (const btn of typeBtns) {
                if (btn.id === selectedBtn.id) {
                    btn.classList.add('cls-dish-type-selected');
                } else {
                    btn.classList.remove('cls-dish-type-selected');
                }
            }
            if (store) {
                store.selectedType = selectedBtn.id;
            }
            handleRecipeDisplay();
        })
    };
    const curryBtn = document.getElementById('dish-type-curry');
    setTypeListener(curryBtn);
    const saladsBtn = document.getElementById('dish-type-salads');
    setTypeListener(saladsBtn);
    const dessertsBtn = document.getElementById('dish-type-desserts');
    setTypeListener(dessertsBtn);
}

function toggleIgnoreCountListener() {
    const toggle = document.getElementById('dishes-ignore-count-toggle');
    toggle?.addEventListener('click', () => {
        const disableText = '[ ]';
        if (toggle.innerText === disableText) {
            toggle.innerText = '[v]';
            store.dishesIgnoreCount = true;
        } else {
            toggle.innerText = disableText;
            store.dishesIgnoreCount = false;
        }
        checkRecipes();
    });
}

window.onload = () => {
    selectIngredientListeners();
    resetIngredientsListener();
    updateIngredientsSummary();
    toggleIngredientListener();
    typeListeners();
    checkRecipes();
    toggleIgnoreCountListener();
};
