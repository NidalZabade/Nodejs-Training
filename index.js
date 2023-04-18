import {
  getCountry,
  searchForCountryUsingWhileLoop,
  searchForCountryUsingForLoop,
  searchForCountryUsingForOfLoop,
  searchForCountryUsingForInLoop
} from "./countryInfo.js";
import { getCurrency } from "./currencyInfo.js";
import {
  getCurrenciesWithoutDuplicateUsingMap,
  getCurrenciesWithoutDuplicatesUsingSet,
} from "./currenciesCount.js";
import { LINE } from "./constants.js";

console.log(LINE);
console.log(getCountry("India"));
console.log(LINE);
console.log(searchForCountryUsingWhileLoop("India"));
console.log(LINE);
console.log(searchForCountryUsingForLoop("India"));
console.log(LINE);
console.log(searchForCountryUsingForOfLoop("India"));
console.log(LINE);
console.log(searchForCountryUsingForInLoop("India"));
console.log(LINE);
console.log(getCurrency("INR"));
console.log(LINE);
console.log(getCurrenciesWithoutDuplicateUsingMap());
console.log(LINE);
console.log(getCurrenciesWithoutDuplicatesUsingSet());
