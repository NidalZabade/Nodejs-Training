var countries;
var countriesGistAPI =
  "https://api.github.com/gists/0b97ccf117252d742dddf098bc6cc58a";

// Get the country object by name or capital
function getCountry(name) {
  name = name.toLowerCase();
  var country = countries.countries.country;
  return country.filter(
    (country) =>
      country.countryName.toLowerCase() === name ||
      country.capital.toLowerCase() === name
  );
}

async function getJSON() {
  let response = await fetch(countriesGistAPI);
  let data = await response.json();
  return JSON.parse(data.files["countries.json"].content);
}

async function main() {
  // Get the JSON data
  countries = await getJSON();

  // Get the country object
  var country = getCountry("Amman");
  if (country) {
    console.log(country);
  } else {
    console.log("Country not found");
  }
}

main().then(() => console.log("Done"));
