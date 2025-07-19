const ingredient_icons = {
    leek: '🥬',
    mushroom: '🍄',
    egg: '🥚',
    potato: '🥔',
    apple: '🍎',
    herb: '🍁',
    sausage: '🥓',
    milk: '🥛',
    honey: '🍯',
    oil: '🛢️',
    ginger: '🫚',
    tomato: '🍅',
    cacao: '🍫',
    tail: '⤴️',
    soybeans: '🫘',
    corn: '🌽',
    coffee: '☕',
};

const recipes = {
    'curry-1': {
        name: 'Fancy Apple Curry',
        ingredients: [
            { apple: 7 },
        ],
    },
    'curry-2': {
        name: 'Grilled Tail Curry',
        ingredients: [
            { herb: 25 },
            { tail: 8 },
        ],
    },
    'curry-3': {
        name: 'Solar Power Tomato Curry',
        ingredients: [
            { herb: 5 },
            { tomato: 10 },
        ],
    },
    'curry-4': {
        name: 'Dream Eater Butter Curry',
        ingredients: [
            { potato: 18 },
            { milk: 10 },
            { tomato: 15 },
            { cacao: 12 },
        ],
    },
    'curry-5': {
        name: 'Spicy Leek Curry',
        ingredients: [
            { leek: 14 },
            { herb: 8 },
            { ginger: 10 },
        ],
    },
    'curry-6': {
        name: 'Spore Mushroom Curry',
        ingredients: [
            { mushroom: 14 },
            { potato: 9 },
        ],
    },
    'curry-7': {
        name: 'Egg Bomb Curry',
        ingredients: [
            { egg: 8 },
            { potato: 4 },
            { apple: 11 },
            { honey: 12 },
        ],
    },
    'curry-8': {
        name: 'Hearty Cheeseburger Curry',
        ingredients: [
            { sausage: 8 },
            { milk: 8 },
        ],
    },
    'curry-9': {
        name: 'Soft Potato Chowder',
        ingredients: [
            { mushroom: 4 },
            { potato: 8 },
            { milk: 10 },
        ],
    },
    'curry-10': {
        name: 'Simple Chowder',
        ingredients: [
            { milk: 7 },
        ],
    },
    'curry-11': {
        name: 'Beanburger Curry',
        ingredients: [
            { sausage: 7 },
        ],
    },
    'curry-12': {
        name: 'Mild Honey Curry',
        ingredients: [
            { honey: 7 },
        ],
    },
    'curry-13': {
        name: 'Ninja Curry',
        ingredients: [
            { leek: 12 },
            { mushroom: 5 },
            { sausage: 9 },
            { soybeans: 24 },
        ],
    },
    'curry-14': {
        name: 'Drought Katsu Curry',
        ingredients: [
            { sausage: 10 },
            { oil: 5 },
        ],
    },
    'curry-15': {
        name: 'Melty Omelette Curry',
        ingredients: [
            { egg: 10 },
            { tomato: 6 },
        ],
    },
    'curry-16': {
        name: 'Bulk Up Bean Curry',
        ingredients: [
            { egg: 4 },
            { herb: 4 },
            { sausage: 6 },
            { soybeans: 12 },
        ],
    },
    'curry-17': {
        name: 'Limber Corn Stew',
        ingredients: [
            { potato: 8 },
            { milk: 8 },
            { corn: 14 },
        ],
    },
    'curry-18': {
        name: 'Inferno Corn Keema Curry',
        ingredients: [
            { herb: 27 },
            { sausage: 24 },
            { ginger: 12 },
            { corn: 14 },
        ],
    },
    'curry-19': {
        name: 'Dizzy Punch Spicy Curry',
        ingredients: [
            { herb: 11 },
            { honey: 11 },
            { coffee: 11 },
        ],
    },
    'curry-20': {
        name: 'Hidden Power Perk-Up Stew',
        ingredients: [
            { mushroom: 23 },
            { tomato: 25 },
            { soybeans: 28 },
            { coffee: 16 },
        ],
    },
    'curry-21': {
        name: 'Cut Sukiyaki Curry',
        ingredients: [
            { leek: 27 },
            { egg: 22 },
            { sausage: 26 },
            { honey: 26 },
        ],
    },
    'salads-1': {
        name: 'Slowpoke Tail Pepper Salad',
        ingredients: [
            { herb: 10 },
            { oil: 15 },
            { tail: 10 },
        ],
    },
    'salads-2': {
        name: 'Spore Mushroom Salad',
        ingredients: [
            { mushroom: 17 },
            { oil: 8 },
            { tomato: 8 },
        ],
    },
    'salads-3': {
        name: 'Snow Cloak Caesar Salad',
        ingredients: [
            { sausage: 6 },
            { milk: 10 },
        ],
    },
    'salads-4': {
        name: 'Gluttony Potato Salad',
        ingredients: [
            { egg: 9 },
            { potato: 14 },
            { apple: 6 },
            { sausage: 7 },
        ],
    },
    'salads-5': {
        name: 'Water Veil Tofu Salad',
        ingredients: [
            { tomato: 9 },
            { soybeans: 15 },
        ],
    },
    'salads-6': {
        name: 'Superpower Extreme Salad',
        ingredients: [
            { egg: 5 },
            { potato: 3 },
            { sausage: 9 },
            { ginger: 6 },
        ],
    },
    'salads-7': {
        name: 'Bean Ham Salad',
        ingredients: [
            { sausage: 8 },
        ],
    },
    'salads-8': {
        name: 'Snoozy Tomato Salad',
        ingredients: [
            { tomato: 8 },
        ],
    },
    'salads-9': {
        name: 'Moomoo Caprese Salad',
        ingredients: [
            { milk: 12 },
            { oil: 5 },
            { tomato: 6 },

        ],
    },
    'salads-10': {
        name: 'Contrary Chocolate Meat Salad',
        ingredients: [
            { sausage: 9 },
            { cacao: 14 },
        ],
    },
    'salads-11': {
        name: 'Overheat Ginger Salad',
        ingredients: [
            { herb: 17 },
            { ginger: 10 },
            { tomato: 8 },
        ],
    },
    'salads-12': {
        name: 'Fancy Apple Salad',
        ingredients: [
            { apple: 8 },
        ],
    },
    'salads-13': {
        name: 'Immunity Leek Salad',
        ingredients: [
            { leek: 10 },
            { ginger: 5 },
        ],
    },
    'salads-14': {
        name: 'Dazzling Apple Cheese Salad',
        ingredients: [
            { apple: 15 },
            { milk: 5 },
            { oil: 3 },
        ],
    },
    'salads-15': {
        name: 'Ninja Salad',
        ingredients: [
            { leek: 15 },
            { mushroom: 12 },
            { ginger: 11 },
            { soybeans: 19 },
        ],
    },
    'salads-16': {
        name: 'Heat Wave Tofu Salad',
        ingredients: [
            { herb: 6 },
            { soybeans: 10 },
        ],
    },
    'salads-17': {
        name: 'Greengrass Salad',
        ingredients: [
            { potato: 9 },
            { oil: 22 },
            { tomato: 14 },
            { corn: 17 },
        ],
    },
    'salads-18': {
        name: 'Calm Mind Fruit Salad',
        ingredients: [
            { apple: 21 },
            { honey: 16 },
            { corn: 12 },
        ],
    },
    'salads-19': {
        name: 'Fury Attack Corn Salad',
        ingredients: [
            { oil: 8 },
            { corn: 9 },
        ],
    },
    'salads-20': {
        name: 'Cross Chop Salad',
        ingredients: [
            { egg: 20 },
            { sausage: 15 },
            { tomato: 10 },
            { corn: 11 },
        ],
    },
    'salads-21': {
        name: 'Defiant Coffee-Dressed Salad',
        ingredients: [
            { potato: 22 },
            { sausage: 28 },
            { oil: 22 },
            { coffee: 28 },
        ],
    },
    'salads-22': {
        name: 'Petal Blizzard Layered Salad',
        ingredients: [
            { egg: 25 },
            { potato: 15 },
            { sausage: 12 },
            { oil: 17 },
        ],
    },
    'salads-23': {
        name: 'Apple Acid Yogurt-Dressed Salad',
        ingredients: [
            { egg: 35 },
            { apple: 28 },
            { milk: 18 },
            { tomato: 23 },
        ],
    },
    'desserts-1': {
        name: 'Fluffy Sweet Potatoes',
        ingredients: [
            { potato: 9 },
            { milk: 5 },
        ],
    },
    'desserts-2': {
        name: 'Steadfast Ginger Cookies',
        ingredients: [
            { egg: 4 },
            { honey: 14 },
            { ginger: 12 },
            { cacao: 5 },
        ],
    },
    'desserts-3': {
        name: 'Fancy Apple Juice',
        ingredients: [
            { apple: 8 },
        ],
    },
    'desserts-4': {
        name: 'Craft Soda Pop',
        ingredients: [
            { honey: 9 },
        ],
    },
    'desserts-5': {
        name: 'Ember Ginger Tea',
        ingredients: [
            { apple: 7 },
            { ginger: 9 },
        ]
    },
    'desserts-6': {
        name: 'Jigglypuff\'s Fruity Flan',
        ingredients: [
            { egg: 15 },
            { apple: 10 },
            { milk: 10 },
            { honey: 20 },
        ]
    },
    'desserts-7': {
        name: 'Lovely Kiss Smoothie',
        ingredients: [
            { apple: 11 },
            { milk: 9 },
            { honey: 7 },
            { cacao: 8 },
        ],
    },
    'desserts-8': {
        name: 'Lucky Chant Apple Pie',
        ingredients: [
            { apple: 12 },
            { milk: 4 },
        ],
    },
    'desserts-9': {
        name: 'Neroli\'s Restorative Tea',
        ingredients: [
            { mushroom: 9 },
            { apple: 15 },
            { ginger: 11 },
        ],
    },
    'desserts-10': {
        name: 'Sweet Scent Chocolate Cake',
        ingredients: [
            { milk: 7 },
            { honey: 9 },
            { cacao: 8 },
        ],
    },
    'desserts-11': {
        name: 'Warm Moomoo Milk',
        ingredients: [
            { milk: 7 },
        ],
    },
    'desserts-12': {
        name: 'Cloud Nine Soy Cake',
        ingredients: [
            { egg: 8 },
            { soybeans: 7 },
        ],
    },
    'desserts-13': {
        name: 'Hustle Protein Smoothie',
        ingredients: [
            { cacao: 8 },
            { soybeans: 15 },
        ],
    },
    'desserts-14': {
        name: 'Stalwart Vegetable Juice',
        ingredients: [
            { apple: 7 },
            { tomato: 9 },
        ],
    },
    'desserts-15': {
        name: 'Big Malasada',
        ingredients: [
            { milk: 7 },
            { honey: 6 },
            { oil: 10 },
        ],
    },
    'desserts-16': {
        name: 'Huge Power Soy Donuts',
        ingredients: [
            { oil: 12 },
            { cacao: 7 },
            { soybeans: 16 },
        ],
    },
    'desserts-17': {
        name: 'Explosion Popcorn',
        ingredients: [
            { milk: 7 },
            { oil: 14 },
            { corn: 15 },
        ],
    },
    'desserts-18': {
        name: 'Teatime Corn Scones',
        ingredients: [
            { apple: 20 },
            { ginger: 20 },
            { milk: 9 },
            { corn: 18 },
        ],
    },
    'desserts-19': {
        name: 'Petal Dance Chocolate Tart',
        ingredients: [
            { apple: 11 },
            { cacao: 11 },
        ],
    },
    'desserts-20': {
        name: 'Flower Gift Macarons',
        ingredients: [
            { egg: 25 },
            { milk: 10 },
            { honey: 17 },
            { cacao: 25 },
        ],
    },
    'desserts-21': {
        name: 'Early Bird Coffee Jelly',
        ingredients: [
            { milk: 14 },
            { honey: 12 },
            { coffee: 16 },
        ],
    },
    'desserts-22': {
        name: 'Zing Zap Spiced Cola',
        ingredients: [
            { leek: 20 },
            { apple: 35 },
            { ginger: 20 },
            { coffee: 12 },
        ],
    },
    'desserts-23': {
        name: 'Mold Breaker Corn Tiramisu',
        ingredients: [
            { milk: 12 },
            { corn: 14 },
            { coffee: 14 },
        ],
    },
    'desserts-24': {
        name: 'Clodsire Eclair',
        ingredients: [
            { milk: 26 },
            { honey: 22 },
            { cacao: 30 },
            { coffee: 24 },
        ],
    },
};

export {
    ingredient_icons,
    recipes,
};
