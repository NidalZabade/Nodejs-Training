var countries;
var countriesGistAPI =
  "https://api.github.com/gists/0b97ccf117252d742dddf098bc6cc58a";


// Get the JSON data  
async function getJSON() {
  let response = await fetch(countriesGistAPI);
  let data = await response.json();
  return JSON.parse(data.files["countries.json"].content);
}

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

async function getCountry() {
  // Get the JSON data
  countries = await getJSON();
  // Get the country object
  var country = searchForCountry("Amman");
  console.log(country ?? "Country not found");
}

export const getCountryInfo = getCountry;
