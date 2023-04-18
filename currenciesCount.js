import { getCountriesJSON } from "./api.js";

let countriesJson = await getCountriesJSON();
let countries = countriesJson.countries.country;

// function to get all currencies from countries.json without duplicates (returns array) [1]

let getCurrenciesSet = (countries) => [
  ...new Set(countries.map((countries) => countries.currencyCode)),
];

// function to get all currencies from countries.json without duplicates (returns object) [2]

let getCurrenciesMap = (countries) =>
  countries
    .filter(
      (value, index, self) =>
        self.findIndex((t) => t.currencyCode === value.currencyCode) === index
    )
    .map((countries) => countries.currencyCode);

export let getCurrenciesWithoutDuplicatesUsingSet = () =>
  getCurrenciesSet(countries);

export let getCurrenciesWithoutDuplicateUsingMap = () =>
  getCurrenciesMap(countries);
