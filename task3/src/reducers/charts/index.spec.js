import {changeRangeType, fetchByDate} from './'
import store from 'store';

describe('Charts reducer', () => {
    it('"changeRangeType" should return action data', () => {
        expect(store.getState().charts.rangeType).toEqual('month');

        expect(store.dispatch(changeRangeType('week'))).toEqual({
            type: 'charts/changeRangeType',
            payload: 'week',
        });

        expect(store.getState().charts.rangeType).toEqual('week');
    });

    it('"fetchByDate" should return action data', () => {
        expect(store.getState().charts.data).toEqual([]);

        expect(store.dispatch(fetchByDate({data: [1,2,3], startDate: 'foo', endDate: 'bar'}))).toEqual({
            type: 'charts/fetchByDate',
            payload: {
                data: [1,2,3],
                startDate: 'foo',
                endDate: 'bar'
            },
        });

        expect(store.getState().charts.data).toEqual([1,2,3]);
    })
})