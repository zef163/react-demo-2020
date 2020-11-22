import {render} from '@testing-library/react';
import {Provider} from 'react-redux'

import App from './App';
import store from 'store';

jest.mock('components/chart', () => ({
    __esModule: true,
    default: 'Chart',
}));

describe('App container', () => {
    it('should render component', () => {
        const Wrapper = ({children}) => <Provider store={store}>{children}</Provider>;
        expect(render(<App />, {wrapper: Wrapper})).toMatchSnapshot();
    });
});
