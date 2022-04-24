import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 8px 0;

  /* border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.secondary}; */
`;
export const Row = styled.View`
  flex-direction: row;

  align-items: center;
`;

export const Input = styled.TextInput`
  flex-grow: 1;
  color: white;

  font-family: 'Raleway-Bold';
  font-weight: 800;
  font-size: 18px;
`;

export const Label = styled.Text``;
