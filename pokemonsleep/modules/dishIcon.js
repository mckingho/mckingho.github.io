import { ingredient_icons } from './ingredient.js';

const dishEmojiKeywords = [
  ['tail', '🦐'],
  ['apple', '🍎'],
  ['tomato', '🍅'],
  ['butter', '🧈'],
  ['leek', '🥬'],
  ['mushroom', '🍄'],
  ['omelette', '🍳'],
  ['egg', '🥚'],
  ['cheeseburger', '🍔'],
  ['beanburger', '🍔'],
  ['burger', '🍔'],
  ['potato', '🥔'],
  ['honey', '🍯'],
  ['corn', '🌽'],
  ['pumpkaboo', '🎃'],
  ['pumpkin', '🎃'],
  ['avocado', '🥑'],
  ['guacamole', '🥑'],
  ['coffee', '☕'],
  ['chocolate', '🍫'],
  ['cacao', '🍫'],
  ['ginger', '🫚'],
  ['tofu', '🫘'],
  ['soy', '🫘'],
  ['yogurt', '🥛'],
  ['milk', '🥛'],
  ['cookies', '🍪'],
  ['cookie', '🍪'],
  ['donuts', '🍩'],
  ['donut', '🍩'],
  ['waffles', '🧇'],
  ['waffle', '🧇'],
  ['pancakes', '🥞'],
  ['pancake', '🥞'],
  ['macarons', '🍪'],
  ['macaron', '🍪'],
  ['cake', '🍰'],
  ['tart', '🥧'],
  ['pie', '🥧'],
  ['flan', '🍮'],
  ['jelly', '🍮'],
  ['smoothie', '🥤'],
  ['soda', '🥤'],
  ['cola', '🥤'],
  ['juice', '🧃'],
  ['tea', '🍵'],
  ['popcorn', '🍿'],
  ['scones', '🥐'],
  ['scone', '🥐'],
  ['udon', '🍜'],
  ['chowder', '🍲'],
  ['stew', '🥘'],
  ['gratin', '🧀'],
  ['bun', '🍞'],
  ['chips', '🍟'],
  ['salad', '🥗'],
  ['curry', '🍛'],
];

function dishEmoji(recipe) {
  const recipeName = recipe?.name?.toLowerCase() || '';
  const lowPriorityKeywords = new Set(['curry', 'salad']);

  let selectedEmoji = '';
  let selectedPriority = -1;
  let selectedKeywordIndex = -1;
  let selectedKeywordLength = -1;

  for (const [keyword, emoji] of dishEmojiKeywords) {
    const keywordIndex = recipeName.lastIndexOf(keyword);
    if (keywordIndex === -1) {
      continue;
    }

    const keywordPriority = lowPriorityKeywords.has(keyword) ? 0 : 1;

    // Prefer non-fallback keywords first, then later keyword positions, then longer matches.
    if (
      keywordPriority > selectedPriority ||
      (keywordPriority === selectedPriority && keywordIndex > selectedKeywordIndex) ||
      (
        keywordPriority === selectedPriority &&
        keywordIndex === selectedKeywordIndex &&
        keyword.length > selectedKeywordLength
      )
    ) {
      selectedEmoji = emoji;
      selectedPriority = keywordPriority;
      selectedKeywordIndex = keywordIndex;
      selectedKeywordLength = keyword.length;
    }
  }

  if (selectedEmoji) {
    return selectedEmoji;
  }

  const firstIngredient = recipe?.ingredients?.[0];
  const firstIngredientKey = firstIngredient ? Object.keys(firstIngredient)[0] : undefined;
  return ingredient_icons[firstIngredientKey] || '🍽️';
}

export {
  dishEmojiKeywords,
  dishEmoji,
};
