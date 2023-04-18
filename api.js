import { CURRENCIES_URL, COUNTRIES_URL } from "./constants.js";

export let getCurrenciesJSON = async () => {
  let response = await fetch(CURRENCIES_URL);
  return response.json();
};

export let getCountriesJSON = async () => {
  let response = await fetch(COUNTRIES_URL);
  return response.json();
};
