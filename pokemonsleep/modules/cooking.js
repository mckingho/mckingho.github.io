/// check inventory against recipe of a dish,
/// return lacking ingredients
function lacking_ingredients(recipe, inventory = {}, ignoreCount = false) {
    const lacking = {};
    if (recipe.ingredients) {
        recipe.ingredients.forEach((ingrCount) => {
            for (const [ingr, count] of Object.entries(ingrCount)) {
                if (inventory[ingr]) {
                    if (!ignoreCount && count > inventory[ingr]) {
                        lacking[ingr] = count - inventory[ingr];
                    }
                } else {
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
