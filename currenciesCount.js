import { getCountriesJSON } from "./api.js";

let countriesJson = await getCountriesJSON();
let countries = countriesJson.countries.country;

// function to get all currencies from countries.json without duplicates (returns array) [1]

let getCurrenciesSet = (countries) => {
  return [...new Set(countries.map((countries) => countries.currencyCode))];
};

// function to get all currencies from countries.json without duplicates (returns object) [2]

let getCurrenciesMap = (countries) => {
  //filter out the duplicates and return map of currencies
  return countries
    .filter(
      (value, index, self) =>
        self.findIndex((t) => t.currencyCode === value.currencyCode) === index
    )
    .map((countries) => countries.currencyCode);
};

export let getCurrenciesWithoutDuplicatesUsingSet = () => {
  let currencies = getCurrenciesSet(countries);
  return currencies;
};

export let getCurrenciesWithoutDuplicateUsingMap = () => {
  let currencies = getCurrenciesMap(countries);
  return currencies;
};
