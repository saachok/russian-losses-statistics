import { differenceInDays } from "date-fns";
import { MAX_AVAILABLE_DAYS_RANGE } from "./constants";

export const millisecondsToDays = (milliseconds) => {
  return milliseconds / (1000 * 24 * 60 * 60);
};

export const daysToMilliseconds = (days) => {
  return days * 24 * 60 * 60 * 1000;
};

export const getDateRangeLength = (end, start) => {
  return 1 + differenceInDays(end, start);
};

// refactor this block of code
export const disableOutOfRange = (date, dates) => {
  let currentDateToMilliseconds = date["$d"].getTime();

  if (dates[0] == null) {
    return false;
  }

  let topBorderDateMilliseconds =
    dates[0]["$d"].getTime() + daysToMilliseconds(MAX_AVAILABLE_DAYS_RANGE);

  if (currentDateToMilliseconds >= topBorderDateMilliseconds) {
    return true;
  }

  if (dates[1] == null) {
    return;
  }
  let botBorderDateMilliseconds =
    dates[1]["$d"].getTime() - daysToMilliseconds(MAX_AVAILABLE_DAYS_RANGE);

  if (currentDateToMilliseconds <= botBorderDateMilliseconds) {
    return true;
  } else return false;
};
