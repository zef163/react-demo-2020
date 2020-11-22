import {render} from '@testing-library/react';

import LineChart from './'

jest.mock('recharts');
jest.mock('components/dropdown', () => ({
    __esModule: true,
    default: 'Dropdown',
}));

describe('<LineChart />', () => {
    it('should render', () => {
        expect(render(<LineChart data={[{val: 1}, {val: 2}]} />)).toMatchSnapshot();
    });
});