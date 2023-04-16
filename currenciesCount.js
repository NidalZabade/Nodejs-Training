var countries;
var countriesGistAPI =
  "https://api.github.com/gists/0b97ccf117252d742dddf098bc6cc58a";

// function to get all currencies from countries.json without duplicates (returns array) [1]

function getCurrenciesFirst(country) {
  return [...new Set(country.map((country) => country.currencyCode))];
}

// function to get all currencies from countries.json without duplicates (returns object) [2]

function getCurrenciesSecond(country) {
  return country
    .map((country) => country.currencyCode)
    .filter((currency, index, array) => array.indexOf(currency) === index);
}

// Get the JSON data

async function getJSON() {
  let response = await fetch(countriesGistAPI);
  let data = await response.json();
  return JSON.parse(data.files["countries.json"].content);
}

async function main() {
  // Get the JSON data
  countries = await getJSON();
  var country = countries.countries.country;

  currencies = getCurrenciesFirst(country);

  // print number of currencies
  console.log(currencies.length);
  console.log(currencies);

  currencies = getCurrenciesSecond(country);

  // print number of currencies
  console.log(currencies.length);
  console.log(currencies);
}

main().then(() => console.log("Done"));
