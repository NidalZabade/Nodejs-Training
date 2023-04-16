import { getCountries } from "./api.js";

let countries = await getCountries();

// Get the country object by name or capital
function searchForCountry(name) {
  name = name.toLowerCase();
  var country = countries.countries.country;
  return country.filter(
    (country) =>
      country.countryName.toLowerCase() === name ||
      country.capital.toLowerCase() === name
  );
}

async function getCountry(name) {
  // Get the country object
  let country = searchForCountry(name);
  console.log(country ?? "Country not found");
}

export const getCountryInfo = getCountry;
