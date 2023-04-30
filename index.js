import {
  getCountry,
  searchForCountryUsingWhileLoop,
  searchForCountryUsingForLoop,
  searchForCountryUsingForOfLoop,
  searchForCountryUsingForInLoop,
} from "./countryInfo.js";
import { getCurrency } from "./currencyInfo.js";
import {
  getCurrenciesWithoutDuplicateUsingMap,
  getCurrenciesWithoutDuplicatesUsingSet,
} from "./currenciesCount.js";
import { LINE } from "./constants.js";
import { Stack } from "./stack.js";
import { CustomDate } from "./customDate.js";

// // test CurrencyInfo, CountryInfo and CurrenciesCount modules
// console.log(LINE);
// console.log(getCountry("India"));
// console.log(LINE);
// console.log(searchForCountryUsingWhileLoop("India"));
// console.log(LINE);
// console.log(searchForCountryUsingForLoop("India"));
// console.log(LINE);
// console.log(searchForCountryUsingForOfLoop("India"));
// console.log(LINE);
// console.log(searchForCountryUsingForInLoop("India"));
// console.log(LINE);
// console.log(getCurrency("INR"));
// console.log(LINE);
// console.log(getCurrenciesWithoutDuplicateUsingMap());
// console.log(LINE);
// console.log(getCurrenciesWithoutDuplicatesUsingSet());

// // test Stack class
// const stack = new Stack();
// console.log(stack.isEmpty());
// console.log(stack.displayStack(stack));
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(5);
// stack.push(6);
// console.log(stack.displayStack(stack));
// console.log(stack.pop());
// console.log(stack.trim());
// console.log(stack.isEmpty());
// console.log(stack.size());
// console.log(stack.peek());
// console.log(stack.displayStack(stack));
// console.log(stack.reverse_stack(stack));
// console.log(stack.max());
// console.log(stack.min());
// console.log(stack.find(3));
// console.log(stack.set());
// console.log(stack.top(2));
// console.log(stack.bottom(2));
// console.log(stack.remove(2));
// console.log(stack.items);
// console.log(stack.clear());

// test CustomDate class
const customDate = new CustomDate();
console.log(customDate.current());
// console.log(customDate.updateDate("2021-03-15"));
// console.log(customDate.current());
// console.log(customDate.addMinutes(10));
// console.log(customDate.addHours(1));
// console.log(customDate.addDays(1));
console.log(customDate.yesterday());
console.log(customDate.yesterdayDay());
console.log(customDate.tomorrow());
console.log(customDate.tomorrowDay());
// console.log(customDate.isFuture());
// console.log(customDate.getQuarter());
// console.log(customDate.differenceInDays("2021-08-01"));
// console.log(customDate.convertMinutesToTextualHour(100));
// console.log(customDate.shortDay("2023-05-02"));