var currenciesURL =
  "https://gist.githubusercontent.com/ksafranski/2973986/raw/5fda5e87189b066e11c1bf80bbfbecb556cf2cc1/Common-Currency.json";
var countriesURL =
  "https://gist.githubusercontent.com/tiagodealmeida/0b97ccf117252d742dddf098bc6cc58a/raw/f621703926fc13be4f618fb4a058d0454177cceb/countries.json";

async function getCurrenciesJSON() {
  let response = await fetch(
    "https://gist.githubusercontent.com/ksafranski/2973986/raw/5fda5e87189b066e11c1bf80bbfbecb556cf2cc1/Common-Currency.json"
  );
  return await response.json();
}

async function getCountriesJSON() {
  let response = await fetch(
    "https://gist.githubusercontent.com/tiagodealmeida/0b97ccf117252d742dddf098bc6cc58a/raw/f621703926fc13be4f618fb4a058d0454177cceb/countries.json"
  );
  return await response.json();
}



export const getCurrencies = getCurrenciesJSON;
export const getCountries = getCountriesJSON;
