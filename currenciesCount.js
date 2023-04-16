import { getCountries } from "./api.js";

let countries = await getCountries();
let country = countries.countries.country;

// function to get all currencies from countries.json without duplicates (returns array) [1]

function getCurrenciesSet(country) {
  return [...new Set(country.map((country) => country.currencyCode))];
}

// function to get all currencies from countries.json without duplicates (returns object) [2]

function getCurrenciesMap(country) {
  return country
    .map((country) => country.currencyCode)
    .filter((currency, index, array) => array.indexOf(currency) === index);
}

async function getCurrenciesCountFirst() {
  let currencies = getCurrenciesSet(country);
  let currenciesCount = currencies.length;
  console.log(currenciesCount);
  console.log(currencies);
}

async function getCurrenciesCountSecond() {
  let currencies = getCurrenciesMap(country);
  let currenciesCount = currencies.length;
  console.log(currenciesCount);
  console.log(currencies);
}

export const getCurrenciesCountUsingSet = getCurrenciesCountFirst;
export const getCurrenciesCountUsingMap = getCurrenciesCountSecond;
