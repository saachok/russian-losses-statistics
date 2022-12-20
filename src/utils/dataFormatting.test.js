// import { millisecondsToDays, getDateRangeLength } from "./dateFunctions";
import { DATE_2022_02_27, INITIAL_CHART_DATA } from "./constants";

import {
  getValidAPI,
  fetchAPI,
  filterChartData,
  formatData,
} from "./dataFormatting";

// const setLosses = () => {
//   return 0;
// };

// const setError = () => {
//   return 0;
// };

const data = {
  message: "The data were fetched successfully.",
  data: {
    records: [
      {
        date: "date",
        day: 1,
        resource: "url",
        stats: {
          aa_warfare_systems: 210,
          armoured_fighting_vehicles: 5877,
          artillery_systems: 1904,
          atgm_srbm_systems: 4,
          cruise_missiles: 531,
          helicopters: 261,
          mlrs: 395,
          personnel_units: 89440,
          planes: 280,
          special_military_equip: 163,
          tanks: 2915,
          uav_systems: 1562,
          vehicles_fuel_tanks: 4441,
          warships_cutters: 16,
        },
      },
    ],
    paging: {
      next_url: "next_url",
      prev_url: "prev_url",
      first_url: "first_url",
      last_url: "last_url",
    },
  },
};

describe("Formatting data", () => {
  it("get valid API", () => {
    expect(
      getValidAPI(
        new Date("2022-02-28T22:00:00.000Z"),
        new Date("2022-02-28T22:00:00.000Z")
      )
    ).toEqual("https://russianwarship.rip/api/v1/statistics?offset=3&limit=1");
  });

  const fetchSuccess = () =>
    Promise.resolve({
      json: () => Promise.resolve(data),
    });

  const errorObj = new Error();
  const fetchError = () => Promise.reject(errorObj);

  const handleSuccessSpy = jest.fn();
  const handleErrorSpy = jest.fn().mockImplementation(() => {
    console.log("test log");
  });

  it("should call handleSuccess when fetched successfuly", async () => {
    global.fetch = jest.fn().mockImplementation(fetchSuccess);

    const losses = formatData(data);
    await fetchAPI("url", handleSuccessSpy, handleErrorSpy);

    expect(handleSuccessSpy).toHaveBeenCalledWith(losses);
    expect(handleErrorSpy).not.toHaveBeenCalled();
  });

  it("should call handleError when fetch failed", async () => {
    global.fetch = jest.fn().mockImplementation(fetchError);

    await fetchAPI("url", handleSuccessSpy, handleErrorSpy);

    expect(handleSuccessSpy).not.toHaveBeenCalled();
    expect(fetch).rejects.toEqual(errorObj);
    expect(handleErrorSpy).toHaveBeenCalledWith(errorObj);
    // expect(handleErrorSpy).toHaveBeenCalledWith(errorObj);
  });

  it("create correct data format", () => {
    const formatedData = formatData(data);
    expect(formatedData).toBeTruthy();
    expect(formatedData.date.length).toBeGreaterThan(0);
    expect(formatedData.losses.length).toBeGreaterThan(0);
    expect(formatedData.losses[0].label).toStrictEqual("Personnel units");
    expect(formatedData.losses[0].data.length).toBeGreaterThan(0);
    expect(formatedData.losses[0].backgroundColor).toBeTruthy();
    expect(formatedData.losses[0].borderColor).toBeTruthy();
  });
});
