import {render} from '@testing-library/react';

import Dropdown from './'

jest.mock('react-dropdown');

describe('<Dropdown />', () => {
    it('should render with props', () => {
        const props = {
            options: [1,2,3],
            onChange: jest.fn(),
            placeholder: 'Placeholder',
            value: 1
        };
        expect(render(<Dropdown {...props} />)).toMatchSnapshot();
    });

    it('should render without props', () => {
        expect(render(<Dropdown />)).toMatchSnapshot();
    });
});