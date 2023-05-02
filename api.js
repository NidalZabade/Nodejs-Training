import { CURRENCIES_URL, COUNTRIES_URL } from "./constants.js";
import axios from "axios";

export let getCurrenciesJSON = async () => {
  let response = await axios.get(CURRENCIES_URL);
  return response.data;
};

export let getCountriesJSON = async () => {
  let response = await axios.get(COUNTRIES_URL);
  return response.data;
};
