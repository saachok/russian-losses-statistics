// import { millisecondsToDays, getDateRangeLength } from "./dateFunctions";
import { DATE_2022_02_27, INITIAL_CHART_DATA } from "./constants";

import {
  getValidAPI,
  fetchAPI,
  filterChartData,
  formatData,
} from "./dataFormatting";

test("get valid API", () => {
  expect(getValidAPI(new Date("2022-03-01"), new Date("2022-03-01"))).toEqual(
    "https://russianwarship.rip/api/v1/statistics?offset=3&limit=1"
  );
});
