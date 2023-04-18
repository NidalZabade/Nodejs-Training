import { getCurrenciesJSON } from "./api.js";
import { CURRENCY_NOT_FOUND } from "./constants.js";

let currencies = await getCurrenciesJSON();

// Get the currency object by name or code
let searchForCurrency = (currency) => {
  // The currency code is always in uppercase
  let code = currency.toUpperCase();
  if (currencies[code]) {
    return currencies[code];
  }
  let currencyName = currency.toLowerCase();
  let currenciesName = Object.values(currencies);
  return (
    currenciesName.find(
      (currency) => currency.name.toLowerCase() === currencyName
    ) ?? CURRENCY_NOT_FOUND
  );
};

export let getCurrency = (name) => searchForCurrency(name);
