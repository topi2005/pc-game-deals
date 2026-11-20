// Parts B and C: put the deals on the page.
// Uses `deals` from data.js and the helper functions from functions.js.

const searchBox = document.getElementById("search");
const saleOnlyBox = document.getElementById("sale-only");
const dealList = document.getElementById("deal-list");
const resultCount = document.getElementById("result-count");

function formatRand(amount) {
  return "R" + amount.toFixed(2);
}

// Build one list item for one game.
function createDealItem(game) {
  const item = document.createElement("li");
  item.className = "deal";

  const title = document.createElement("h2");
  title.textContent = game.title;

  const store = document.createElement("p");
  store.className = "store";
  store.textContent = game.store;

  const prices = document.createElement("p");
  prices.className = "prices";

  const normal = document.createElement("span");
  normal.textContent = formatRand(game.normalPrice);
  prices.appendChild(normal);

  if (isOnSale(game)) {
    normal.className = "normal-price crossed-out";

    const sale = document.createElement("span");
    sale.className = "sale-price";
    sale.textContent = formatRand(game.salePrice);
    prices.appendChild(sale);

    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = "ON SALE · " + getDiscountPercent(game) + "% off";
    item.appendChild(tag);
  } else {
    normal.className = "normal-price";
  }

  item.appendChild(title);
  item.appendChild(store);
  item.appendChild(prices);
  return item;
}

// Work out which games to show, then redraw the list.
function render() {
  let visible = searchGames(deals, searchBox.value);
  if (saleOnlyBox.checked) {
    visible = getGamesOnSale(visible);
  }

  dealList.innerHTML = "";
  for (const game of visible) {
    dealList.appendChild(createDealItem(game));
  }

  if (visible.length === 0) {
    resultCount.textContent = "No games match. Try a different search.";
  } else {
    resultCount.textContent = "Showing " + visible.length + " of " + deals.length + " games";
  }
}

searchBox.addEventListener("input", render); // live search
saleOnlyBox.addEventListener("change", render);
render();
