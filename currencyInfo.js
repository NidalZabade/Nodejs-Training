import { getCurrencies } from "./api.js";

let currencies = await getCurrencies();

// Get the currency object by name or code
function searchForCurrency(currency) {
  // The currency code is always in uppercase
  var code = currency.toUpperCase();
  if (currencies[code]) {
    return currencies[code];
  }
  currency = currency.toLowerCase();
  let currencyName = Object.values(currencies);
  return currencyName.filter(
    (currencyName) => currencyName.name.toLowerCase() === currency
  );
}

async function getCurrency(name) {
  // Get the currency object
  var currency = searchForCurrency(name);
  console.log(currency ?? "Currency not found");
}


export const getCurrencyInfo = getCurrency;
