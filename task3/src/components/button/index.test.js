import {render} from '@testing-library/react';

import {ButtonWrapper, Button} from './'

describe('<ButtonWrapper />', () => {
    it('should render', () => {
        expect(render(<ButtonWrapper>Some content</ButtonWrapper>)).toMatchSnapshot();
    });
});

describe('<Button />', () => {
    it('should render button', () => {
        expect(render(<Button>Some content</Button>)).toMatchSnapshot();
    });

    it('should render active button', () => {
        expect(render(<Button isActive>Some content</Button>)).toMatchSnapshot();
    });
});