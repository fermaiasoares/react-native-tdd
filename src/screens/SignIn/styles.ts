import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Text = styled.Text`
    font-size: 20px;
    font-family: ${({ theme }) => theme.fonts.light };
`;

export const Button = styled.Button``;
