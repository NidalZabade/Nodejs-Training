var countries = await getJSON();
var country = countries.countries.country;
var countriesGistAPI =
  "https://api.github.com/gists/0b97ccf117252d742dddf098bc6cc58a";


// Get the JSON data

async function getJSON() {
  let response = await fetch(countriesGistAPI);
  let data = await response.json();
  return JSON.parse(data.files["countries.json"].content);
}

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

async function getCurrenciesCountSet() {
  currencies = getCurrenciesSet(country);

  // print number of currencies
  console.log(currencies.length);
  console.log(currencies);
}

async function getCurrenciesCountMap() {
  currencies = getCurrenciesMap(country);

  // print number of currencies
  console.log(currencies.length);
  console.log(currencies);
}

export const getCurrenciesCountFirst = getCurrenciesCountSet;
export const getCurrenciesCountSecond = getCurrenciesCountMap;
