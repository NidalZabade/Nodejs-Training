import { getCurrenciesJSON } from "./api.js";
import { CURRENCY_NOT_FOUND } from "./constants.js";

let currencies = await getCurrenciesJSON();

// Get the currency object by name or code
let searchForCurrency = (currency) => {
  // The currency code is always in uppercase
  var code = currency.toUpperCase();
  if (currencies[code]) {
    return currencies[code];
  }
  currency = currency.toLowerCase();
  let currencyName = Object.values(currencies);
  return currencyName.filter(
    (currencyName) => currencyName.name.toLowerCase() === currency
  )[0];
};

export let getCurrency = (name) => (searchForCurrency(name) ?? CURRENCY_NOT_FOUND);
