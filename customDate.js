import {
  WEEK_DAYS,
  DAY_IN_MILLISECOND,
  MINUTES_IN_ONE_HOUR,
  MONTHS_IN_QUARTER,
  INCREMENT_ONE_DAY,
  DECREMENT_ONE_DAY,
} from "./constants.js";
export class CustomDate {
  constructor() {
    this.now = new Date();
    this.date = new Date();
  }

  // update this.date object
  updateDate(newDate) {
    this.date = new Date(newDate);
  }
  getNewDate(daysDifference) {
    return new Date(this.date).setDate(this.date.getDate() + daysDifference);
  }

  // return yesterday's date
  yesterday() {
    return new Date(this.getNewDate(DECREMENT_ONE_DAY));
  }

  // return yesterday's day
  yesterdayDay() {
    return WEEK_DAYS[this.yesterday().getDay()];
  }

  // return tomorrow's date
  tomorrow() {
    return new Date(this.getNewDate(INCREMENT_ONE_DAY));
  }

  // return tomorrow's day
  tomorrowDay() {
    return WEEK_DAYS[this.tomorrow().getDay()];
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
    return this.date;
  }

  // return boolean
  isFuture() {
    return this.date > this.now;
  }

  // Return (bigger, smaller or equal) between the given date and this.date
  compare(newDate) {
    if (this.date === newDate) {
      return "equal";
    }
    return this.date > newDate ? "bigger" : "smaller";
  }

  // Return the difference between the given date and this.date in format (x Days, y hours, z minutes)
  differenceInDays(newDate) {
    return `${Math.floor(
      (new Date(newDate) - this.date) / DAY_IN_MILLISECOND
    )} Days`;
  }

  // Returns minutes in hours format, eg: convertMinutesToTextualHour(200) = 3 hour(s) and 20 minute(s)
  convertMinutesToTextualHour(minutes) {
    return `${Math.floor(minutes / MINUTES_IN_ONE_HOUR)} hour(s) and ${
      minutes % MINUTES_IN_ONE_HOUR
    } minute(s)`;
  }

  // Returns the quarter (1 to 4) of the year for the given date, else use this.date
  getQuarter(newDate, date = this.date) {
    if (newDate) {
      return Math.floor(
        (new Date(newDate).getMonth() + MONTHS_IN_QUARTER) / MONTHS_IN_QUARTER
      );
    }
    return Math.floor(
      (date.getMonth() + MONTHS_IN_QUARTER) / MONTHS_IN_QUARTER
    );
  }

  // Returns current day (three letters, Mon through Sun) for the given date, else use this.date
  shortDay(newDate, date = this.date) {
    if (newDate) {
      return WEEK_DAYS[new Date(newDate).getDay()];
    }
    return WEEK_DAYS[date.getDay()];
  }
}
