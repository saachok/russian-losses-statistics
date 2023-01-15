import { Box } from '@mui/material';
import React, { useEffect, useState, useCallback } from 'react';
import LossChanger from './inputChangers/LossChanger';
import ErrorModal from '../UI/ErrorModal';
import DateRangePickerDemo from './inputChangers/DateRangePicker';
import { getValidAPI, fetchAPI } from '../../utils/dataFormatting';
import InfoButton from './inputChangers/InfoButton';

const LossesSelector = ({ setLosses, setIdentifiers }) => {
  const [dateRange, setDateRange] = useState({ dateFrom: null, dateTo: null });
  const [error, setError] = useState(false);

  useEffect(() => {
    if (dateRange.dateFrom == null && dateRange.dateTo == null) {
      return;
    }

    fetchAPI(
      getValidAPI(dateRange.dateFrom, dateRange.dateTo),
      setLosses,
      setError
    );
  }, [setLosses, dateRange]);

  const setDateRangeState = useCallback(({ dateFrom, dateTo }) => {
    setDateRange({
      dateFrom,
      dateTo,
    });
  }, []);

  return (
    <Box display="flex" alignItems="center" gap="0.5rem" marginTop="0.5rem">
      {error && (
        <ErrorModal
          isOpen={!!error}
          errorText={error}
          onClose={() => {
            setError(false);
          }}
        />
      )}
      <InfoButton />
      <DateRangePickerDemo setDateRangeState={setDateRangeState} />
      <LossChanger getLoss={setIdentifiers} />
    </Box>
  );
};

export default LossesSelector;
