// Part A: the logic. Small functions that each do one job.

// A game is on sale when its sale price is lower than its normal price.
function isOnSale(game) {
  return game.salePrice < game.normalPrice;
}

// The price someone would pay right now.
function getCurrentPrice(game) {
  return isOnSale(game) ? game.salePrice : game.normalPrice;
}

// Return only the games that are on sale.
function getGamesOnSale(games) {
  return games.filter(isOnSale);
}

// Discount as a whole-number percentage (R100 -> R75 gives 25).
// Games that are not on sale have a discount of 0.
function getDiscountPercent(game) {
  if (!isOnSale(game)) {
    return 0;
  }
  const saving = game.normalPrice - game.salePrice;
  return Math.round((saving / game.normalPrice) * 100);
}

// Find the game with the lowest current price.
// If two games tie, the first one in the list wins.
function findCheapestGame(games) {
  if (games.length === 0) {
    return null;
  }
  let cheapest = games[0];
  for (const game of games) {
    if (getCurrentPrice(game) < getCurrentPrice(cheapest)) {
      cheapest = game;
    }
  }
  return cheapest;
}

// Return every game whose title contains the search word, ignoring capitals.
function searchGames(games, searchWord) {
  const word = searchWord.trim().toLowerCase();
  return games.filter((game) => game.title.toLowerCase().includes(word));
}

// Lets Node load these functions; ignored in the browser.
if (typeof module !== "undefined") {
  module.exports = {
    isOnSale,
    getCurrentPrice,
    getGamesOnSale,
    getDiscountPercent,
    findCheapestGame,
    searchGames,
  };
}
