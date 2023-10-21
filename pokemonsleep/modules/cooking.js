/// check inventory against recipe of a dish,
/// return lacking ingredients
function lacking_ingredients(recipe, inventory = {}) {
    const lacking = {};
    if (recipe.ingredients) {
        recipe.ingredients.forEach((ingrCount) => {
            for (const [ingr, count] of Object.entries(ingrCount)) {
                if (inventory[ingr] && count > inventory[ingr]) {
                    lacking[ingr] = count - inventory[ingr];
                } else if (!inventory[ingr]) {
                    lacking[ingr] = count;
                }
            }
        });
    }
    return lacking;
}

export {
    lacking_ingredients,
};
