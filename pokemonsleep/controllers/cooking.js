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

function selectIngredientListeners() {
    const ingredients = Object.keys(store?.ingredients);
    const ingrTotalText = document.getElementById('ingredients-total-no');
    const setIngrTotalText = () => {
        const total = Object.values(store?.ingredients).reduce((a, b) => a + b, 0);
        ingrTotalText.innerHTML = total;
    };
    // select ingredients
    ingredients.forEach((ingr) => {
        const ingrNumText = document.getElementById('ingr-no-' + ingr);
        const setIngrNumText = (text) => {
            ingrNumText.innerHTML = text;
        };
        const subBtn = document.getElementById('ingr-sub-' + ingr);
        subBtn.addEventListener('click', (ev) => {
            ev.stopPropagation();
            if (store?.ingredients?.[ingr] >= 1) {
                store.ingredients[ingr] -= 1;
                setIngrNumText(store.ingredients[ingr]);
                setIngrTotalText();
            }
        });
        const sub5Btn = document.getElementById('ingr-sub5-' + ingr);
        sub5Btn.addEventListener('click', (ev) => {
            ev.stopPropagation();
            if (store?.ingredients?.[ingr] >= 5) {
                store.ingredients[ingr] -= 5;
                setIngrNumText(store.ingredients[ingr]);
                setIngrTotalText();
            }
        });
        const add5Btn = document.getElementById('ingr-add5-' + ingr);
        add5Btn.addEventListener('click', (ev) => {
            ev.stopPropagation();
            if (store?.ingredients?.[ingr] <= Number.MAX_SAFE_INTEGER - 5) {
                store.ingredients[ingr] += 5;
                setIngrNumText(store.ingredients[ingr]);
                setIngrTotalText();
            }
        });
        const addBtn = document.getElementById('ingr-add-' + ingr);
        addBtn.addEventListener('click', () => {
            if (store?.ingredients?.[ingr] <= Number.MAX_SAFE_INTEGER - 1) {
                store.ingredients[ingr] += 1;
                setIngrNumText(store.ingredients[ingr]);
                setIngrTotalText();
            }
        });
    });
}

window.onload = () => {
    selectIngredientListeners();
};
