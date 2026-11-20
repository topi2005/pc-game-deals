// Part A demo. Run with:  node partA.js
const deals = require("./data.js");
const {
  getGamesOnSale,
  getDiscountPercent,
  findCheapestGame,
  searchGames,
} = require("./functions.js");

console.log("--- Games on sale ---");
for (const game of getGamesOnSale(deals)) {
  console.log(`${game.title}: R${game.salePrice} (was R${game.normalPrice}, ${getDiscountPercent(game)}% off)`);
}

console.log("\n--- Discount check from the brief (R100 -> R75) ---");
console.log(getDiscountPercent({ normalPrice: 100, salePrice: 75 }) + "%"); // expect 25%

console.log("\n--- Cheapest game right now ---");
const cheapest = findCheapestGame(deals);
console.log(`${cheapest.title} at R${cheapest.salePrice}`);

console.log('\n--- Search: "hol" ---');
console.log(searchGames(deals, "hol").map((game) => game.title));

//capitals ignored
console.log('\n--- Search: "STAR" ---');
console.log(searchGames(deals, "STAR").map((game) => game.title));

console.log('\n--- Search: "zzz" (no match) ---');
console.log(searchGames(deals, "zzz"));
