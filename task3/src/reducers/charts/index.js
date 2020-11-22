import {createSlice} from '@reduxjs/toolkit'

import {parseDate, getRange} from 'lib/date';

const DEFAULT_RANGE = 'month';

const {startDate, endDate} = getRange(DEFAULT_RANGE)

const charts = createSlice({
    name: 'charts',
    initialState: {
        data: [],
        startDate: parseDate(startDate),
        endDate: parseDate(endDate),
        rangeType: DEFAULT_RANGE,
    },
    reducers: {
        changeRangeType(state, action) {
            const rangeType = action.payload;
            const {startDate, endDate} = getRange(rangeType)

            state.rangeType = rangeType;
            state.startDate = parseDate(startDate);
            state.endDate = parseDate(endDate);
        },
        fetchByDate(state, action) {
            const {data, startDate, endDate} = action.payload;
            state.data = data;
            state.startDate = startDate
            state.endDate = endDate;
        }
    },
});

export const {changeRangeType, fetchByDate} = charts.actions;

export default charts.reducer