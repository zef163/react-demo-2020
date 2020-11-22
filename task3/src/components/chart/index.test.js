import {render, screen} from '@testing-library/react';
import * as redux from 'react-redux'

import Chart from './'

let useSelector;

beforeAll(() => {
    useSelector = jest.spyOn(redux, 'useSelector');
});

afterAll(() => {
    useSelector.mockRestore();
})

jest.mock('components/button', () => ({
    ButtonWrapper: 'ButtonWrapper',
    Button: 'Button'
}));
jest.mock('components/lineChart', () => ({
    __esModule: true,
    default: 'LineChart',
}))

describe('<Chart />', () => {
    it('should render', () => {
        useSelector.mockReturnValue({
            data: [{date: '2020-01-01', val: 1}, {date: '2020-01-02', val: 2}],
            startDate: '2020-01-01',
            rangeType: 'week',
        });
        expect(render(<Chart changeRange={jest.fn()} />)).toMatchSnapshot();
    });

    it.each(['Week', 'Month', 'Quarter', 'Year', 'Max'])(
        'should call "changeRange" from props (%s)',
        (text) => {
            useSelector.mockReturnValue({
                data: [],
                startDate: '2020-01-01',
                rangeType: 'week',
            });
            const changeRange = jest.fn();

            render(<Chart changeRange={changeRange} />);
            const button = screen.getByText(text);

            expect(changeRange).not.toBeCalled();
            button.click();
            expect(changeRange).toHaveBeenCalledWith(text.toLowerCase());
            expect(changeRange).toHaveBeenCalledTimes(1);
        }
    );
});