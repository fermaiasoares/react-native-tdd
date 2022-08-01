import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';

import theme from '../../../global/theme';

import { SignIn } from '../';

describe('SignIn Screen', () => {
    it('Should be signin screen match in snapshot', () => {
        const signInScreen = render(
            <ThemeProvider theme={theme}>
                <SignIn />,
            </ThemeProvider>
        );

        expect(signInScreen).toMatchSnapshot();
    })
})