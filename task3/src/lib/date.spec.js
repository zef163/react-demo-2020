import {advanceTo, clear} from 'jest-date-mock';

import {parseDate, getRange} from './date';

beforeAll(() => {
    advanceTo(new Date(2020, 10, 22, 0, 0, 0, 0));
});

afterAll(() => {
    clear();
})

describe('date library', () => {
    it('"parseDate" should return prepared date', () => {
        expect(parseDate(new Date())).toEqual('2020-11-22');
    });

    describe('getRange', () => {
        it('should return date range for "Week" type', () => {
            expect(getRange('Week')).toEqual({
                startDate: new Date('2020-11-14T20:00:00.000Z'),
                endDate: new Date('2020-11-21T20:00:00.000Z'),
            })
        });
    })

    it.each([
        ['Week', '2020-11-14T20:00:00.000Z', '2020-11-21T20:00:00.000Z'],
        ['Month', '2020-10-22T20:00:00.000Z', '2020-11-21T20:00:00.000Z'],
        ['Quarter', '2020-09-30T20:00:00.000Z', '2020-11-21T20:00:00.000Z'],
        ['Year', '2019-12-31T20:00:00.000Z', '2020-11-21T20:00:00.000Z'],
        ['Max', '2015-01-31T20:00:00.000Z', '2020-11-21T20:00:00.000Z'],
        ['Unknown By Max', '2015-01-31T20:00:00.000Z', '2020-11-21T20:00:00.000Z'],
    ])('"getRange" should return date range for "%s" type', (type, startDate, endDate) => {
        expect(getRange(type)).toEqual({
            startDate: new Date(startDate),
            endDate: new Date(endDate),
        })
    });
})