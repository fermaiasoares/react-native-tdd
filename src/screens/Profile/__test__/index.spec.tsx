import React from 'react';
import { render } from '@testing-library/react-native';

import { Profile } from '..';

describe('Profile Screen', () => {
    it('Check if profil`s screen is equal snapshot', () => {
        const profileScreen = render(<Profile />);
        expect(profileScreen).toMatchSnapshot();
    })

    it('Check if showing correctly user input name placeholder', () => {
        const { getByPlaceholderText } = render(<Profile />);
        const inputName = getByPlaceholderText('Nome');
        expect(inputName.props.placeholder).toBeTruthy();
    })

    it('Check if showing correctly user input last name placeholder', () => {
        const { getByPlaceholderText } = render(<Profile />);
        const inputName = getByPlaceholderText('Sobrenome');
        expect(inputName.props.placeholder).toBeTruthy();
    })

    it('Check if showing correctly save button text', () => {
        const { getByTestId } = render(<Profile />);
        const saveButton = getByTestId('btn-salvar');
        expect(saveButton).toBeTruthy();
    })
})