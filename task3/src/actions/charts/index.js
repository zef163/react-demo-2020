import {fetchByDate} from 'reducers/charts';

/**
 * Fetch charts info by date range
 *
 * @param {string} startDate - Start date
 * @param {string} endDate - End date
 * @return {function(*): Promise<void>}
 */
export const fetchByDateAsync = ({startDate, endDate}) => async dispatch => {
    const params = new URLSearchParams({
        start_at: startDate,
        end_at: endDate,
        base: 'USD',
        symbols: ['RUB'],
    });
    const url = 'https://api.exchangeratesapi.io/history';
    const result = await fetch(`${url}?${params}`);
    const {rates: data} = await result.json();

    const rates = Object.keys(data).sort().map(key => ({
        date: key.split('-').reverse().join('.'),
        val: data[key].RUB,
    }));

    dispatch(fetchByDate({
        data: rates,
        startDate,
        endDate,
    }));
};