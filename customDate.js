import { WEEK_DAYS } from "./constants.js";
export class CustomDate {
  constructor() {
    this.now = new Date();
    this.date = new Date();
  }

  // update this.date object
  updateDate(newDate) {
    this.date = new Date(newDate);
  }

  // return yesterday's date
  yesterday() {
    return new Date(new Date(this.date).setDate(this.date.getDate() - 1));
  }

  // return yesterday's day
  yesterdayDay() {
    return WEEK_DAYS[new Date(new Date(this.date).setDate(this.date.getDate() - 1)).getDay()];
  }

  // return tomorrow's date
  tomorrow() {
    return new Date(new Date(this.date).setDate(this.date.getDate() + 1));
  }

  // return tomorrow's day
  tomorrowDay() {
    return WEEK_DAYS[new Date(new Date(this.date).setDate(this.date.getDate() + 1)).getDay()];
  }

  // add minutes to this.date
  addMinutes(minutes) {
    this.date.setMinutes(this.date.getMinutes() + minutes);
    return this.date;
  }

  // add hours to this.date
  addHours(hours) {
    this.date.setHours(this.date.getHours() + hours);
    return this.date;
  }

  // add days to this.date
  addDays(days) {
    this.date.setDate(this.date.getDate() + days);
    return this.date;
  }

  // Logs the current date-time
  current() {
    return this.now;
  }

  // return boolean
  isFuture() {
    return this.date > this.now;
  }

  // Return (bigger, smaller or equal) between the given date and this.date
  compare(newDate) {
    if (this.date > newDate) {
      return "bigger";
    } else if (this.date < newDate) {
      return "smaller";
    }
    return "equal";
  }

  // Return the difference between the given date and this.date in format (x Days, y hours, z minutes)
  differenceInDays(newDate) {
    return `${Math.floor((new Date(newDate) - this.date) / (1000 * 60 * 60 * 24))} Days`;
  }

  // Returns minutes in hours format, eg: convertMinutesToTextualHour(200) = 3 hour(s) and 20 minute(s)
  convertMinutesToTextualHour(minutes) {
    return `${Math.floor(minutes / 60)} hour(s) and ${minutes % 60} minute(s)`;
  }

  // Returns the quarter (1 to 4) of the year for the given date, else use this.date
  getQuarter(newDate, date = this.date) {
    if (newDate) {
      return Math.floor((new Date(newDate).getMonth() + 3) / 3);
    }
    return Math.floor((date.getMonth() + 3) / 3);
  }

  // Returns current day (three letters, Mon through Sun) for the given date, else use this.date
  shortDay(newDate, date = this.date) {
    if (newDate) {
      return WEEK_DAYS[new Date(newDate).getDay()].slice(0, 3);
    }
    return WEEK_DAYS[date.getDay()].slice(0, 3);
  }
}



