import * as utils from 'ts-jest';
import { renderHook } from '@testing-library/react-hooks';
import {  } from 'expo-auth-session';

import { AuthProvider, useAuth } from './auth';
import { act } from 'react-test-renderer';
import { mocked } from 'ts-jest/utils';

jest.mock('expo-auth-session');

describe('Auth hook', () => {
    it('Should be able use auth hook', async () => {
        const googleMocked = mocked(useAuth);

        console.log(googleMocked);

        const { result } = renderHook(() => useAuth(), {
            wrapper: AuthProvider
        });

        await act(() => result.current.signIn());

        expect(result.current.user).toBeTruthy();

        console.log(result.current);
    })
})