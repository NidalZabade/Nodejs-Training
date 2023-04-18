import { getCountriesJSON } from "./api.js";
import { COUNTRY_NOT_FOUND } from "./constants.js";

let countriesJson = await getCountriesJSON();

// Get the country object by name or capital
let searchForCountry = (name) => {
  name = name.toLowerCase();
  var countries = countriesJson.countries.country;
  return countries.filter(
    (countries) =>
      countries.countryName.toLowerCase() === name ||
      countries.capital.toLowerCase() === name
  )[0];
};

export let getCountry = (name) => searchForCountry(name) ?? COUNTRY_NOT_FOUND;
