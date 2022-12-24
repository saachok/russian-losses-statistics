import { millisecondsToDays, getDateRangeLength } from "./dateFunctions";
import { DATE_2022_02_27, INITIAL_CHART_DATA, LOSSES_MAP } from "./constants";

export const getValidAPI = (dateFrom, dateTo) => {
  const selectedDate =
    dateFrom.getTime() - dateFrom.getTimezoneOffset() * 60000;

  // +1 for correct calculation of offset to API
  const offset =
    millisecondsToDays(selectedDate - DATE_2022_02_27.getTime()) + 1;
  const limit = getDateRangeLength(dateTo, dateFrom);

  return `https://russianwarship.rip/api/v1/statistics?offset=${offset}&limit=${limit}`;
};

export const formatData = (data) => {
  return {
    date: data.data.records.map((losses) => losses.date),
    losses: Object.entries(LOSSES_MAP).map((loss) => ({
      label: loss[1].label,
      data: data.data.records.map((losses) => losses.stats[`${loss[0]}`]),
      backgroundColor: LOSSES_MAP[`${loss[0]}`].backgroundColor,
      borderColor: LOSSES_MAP[`${loss[0]}`].borderColor,
    })),
  };
};

export const filterChartData = (losses, identifiers) => {
  return {
    date: losses.date,
    losses: identifiers.length
      ? losses.losses.filter((elem) => identifiers.includes(elem.label))
      : INITIAL_CHART_DATA.losses,
  };
};

export const fetchAPI = async (url, handleSuccess, handleError) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const losses = formatData(data);
    handleSuccess(losses);
  } catch (error) {
    handleError(error);
  }
};
