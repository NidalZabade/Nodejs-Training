import { getCountriesJSON } from "./api.js";
import { COUNTRY_NOT_FOUND } from "./constants.js";

let countriesJson = await getCountriesJSON();
let countries = countriesJson.countries.country;
// Get the country object by name or capital
let searchForCountry = (name) => {
  name = name.toLowerCase();
  return (
    countries.find(
      (country) =>
        country.countryName.toLowerCase() === name ||
        country.capital.toLowerCase() === name
    ) ?? COUNTRY_NOT_FOUND
  );
};

export let searchForCountryUsingWhileLoop = (name) => {
  name = name.toLowerCase();
  let i = 0;
  while (i < countries.length) {
    if (
      countries[i].countryName.toLowerCase() === name ||
      countries[i].capital.toLowerCase() === name
    ) {
      return countries[i];
    }
    i++;
  }
  return COUNTRY_NOT_FOUND;
};

export let searchForCountryUsingForLoop = (name) => {
  name = name.toLowerCase();
  for (let i = 0; i < countries.length; i++) {
    if (
      countries[i].countryName.toLowerCase() === name ||
      countries[i].capital.toLowerCase() === name
    ) {
      return countries[i];
    }
  }
  return COUNTRY_NOT_FOUND;
};

export let searchForCountryUsingForOfLoop = (name) => {
  name = name.toLowerCase();
  for (let country of countries) {
    if (
      country.countryName.toLowerCase() === name ||
      country.capital.toLowerCase() === name
    ) {
      return country;
    }
  }
  return COUNTRY_NOT_FOUND;
};

export let searchForCountryUsingForInLoop = (name) => {
  name = name.toLowerCase();
  for (let i in countries) {
    if (
      countries[i].countryName.toLowerCase() === name ||
      countries[i].capital.toLowerCase() === name
    ) {
      return countries[i];
    }
  }
  return COUNTRY_NOT_FOUND;
};

export let getCountry = (name) => searchForCountry(name);
