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
    },
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
        const lacking = lacking_ingredients(info, store?.ingredients);

        const dishPowerElem = document.getElementById('dish-power-' + recipeKey);
        if (Object.keys(lacking).length > 0) {
            dishPowerElem?.classList.remove('cls-ready-dish-power');
        } else {
            dishPowerElem?.classList.add('cls-ready-dish-power');
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
                checkRecipes();
            }
        });
        const addBtn = document.getElementById('ingr-add-' + ingr);
        addBtn?.addEventListener('click', () => {
            if (store?.ingredients?.[ingr] <= Number.MAX_SAFE_INTEGER - 1) {
                store.ingredients[ingr] += 1;
                setIngrNumText(store.ingredients[ingr]);
                setIngrTotalText();
                checkRecipes();
            }
        });
    });
}

window.onload = () => {
    selectIngredientListeners();
    checkRecipes();
};
