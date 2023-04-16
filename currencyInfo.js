var currencies;
var currenciesGistAPI = "https://api.github.com/gists/2973986";

// Get the currency object by name or code
function getCurrency(currency) {
  // The currency code is always in uppercase
  var code = currency.toUpperCase();
  if (currencies[code]) {
    return currencies[code];
  }
  currency = currency.toLowerCase();
  let currencyName = Object.values(currencies);
  return currencyName.filter(
    (currencyName) => currencyName.name.toLowerCase() === currency
  );
}

async function getJSON() {
  let response = await fetch(currenciesGistAPI);
  let data = await response.json();
  return JSON.parse(data.files["Common-Currency.json"].content);
}

async function main() {
  // Get the JSON data
  currencies = await getJSON();

  // Get the currency object
  var currency = getCurrency("JOD");
  if (currency) {
    console.log(currency);
  } else {
    console.log("Currency not found");
  }
}

main().then(() => console.log("Done"));
