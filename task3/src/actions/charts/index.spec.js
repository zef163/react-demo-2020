import {fetchByDateAsync} from './'

const rates = {
    '2020-01-01': {RUB: 10.99},
    '2020-01-02': {RUB: 15.86},
};

describe('charts actions', () => {
    it('"fetchByDateAsync" should return function', () => {
        expect(fetchByDateAsync({startDate: 'foo', endDate: 'bar'})).toEqual(expect.any(Function));
    });

    it('"fetchByDateAsync" should dispatch "fetchByDate"', async () => {
        const dispatch = jest.fn();
        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve({rates}),
        }));

        const func = fetchByDateAsync({startDate: '2019-12-31', endDate: '2020-01-03'});
        expect(fetch).not.toHaveBeenCalled();

        await func(dispatch);
        expect(fetch).toHaveBeenCalledWith(
            'https://api.exchangeratesapi.io/history?start_at=2019-12-31&end_at=2020-01-03&base=USD&symbols=RUB'
        );

        expect(dispatch).toHaveBeenCalledWith({
            type: 'charts/fetchByDate',
            payload: {
                data: [
                    {date: '01.01.2020', val: 10.99},
                    {date: '02.01.2020', val: 15.86}
                ],
                startDate: '2019-12-31',
                endDate: '2020-01-03',
            }
        });
        fetch.mockClear();
    })
})