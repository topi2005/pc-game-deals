# Assumptions

- A game is on sale only when salePrice is strictly lower than normalPrice (as the brief says). Stardew Valley and Terraria are therefore not on sale.
- Discounts are rounded to the nearest whole number (Math.round), e.g. Hollow Knight: 50.03% shows as 50%. A game not on sale has a discount of 0.
- If two games tie for cheapest, the first one in the list is returned.
- An empty list gives null for "cheapest" rather than an error.
- Search ignores capitals and leading/trailing spaces. An empty search matches everything.
- The brief says "title contains that word", so I match anywhere in the title ("kni" finds "Hollow Knight").
- Prices are in Rand and shown with two decimals, e.g. R7.49.
- The data lives in data.js (not a .json file fetched at runtime) so the page works by double-clicking index.html, with no local server needed.
- I did not attempt the CheapShark API stretch goal.
