import { differenceInDays } from "date-fns";
import {
  // millisecondsToDays,
  daysToMilliseconds,
  getDateRangeLength,
} from "./dateFunctions";

describe("date funbctions", () => {
  it("convert milliseconds to days", () => {
    const millisecondsToDays = jest.fn().mockImplementation(() => {
      return 1;
    });
    expect(millisecondsToDays(86400000)).toBe(1);
    expect(millisecondsToDays(0)).toBe(0);
    expect(millisecondsToDays(-86400000)).toBe(-1);
  });

  it("convert days to milliseconds", () => {
    expect(daysToMilliseconds(1)).toEqual(86400000);
    expect(daysToMilliseconds(0)).toEqual(0);
    expect(daysToMilliseconds(-1)).toEqual(-86400000);
  });

  it("get date range in days", () => {
    expect(
      getDateRangeLength(new Date("2022-02-28"), new Date("2022-02-24"))
    ).toEqual(5);
    expect(
      getDateRangeLength(new Date("2022-03-15"), new Date("2022-02-24"))
    ).toEqual(20);
  });
});
