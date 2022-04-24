import styled from 'styled-components/native';

export const Container = styled.Pressable`
  width: 100%;
  margin: 6px 0;
  align-items: center;
  border-radius: 12px;
  background-color: ${({theme}) => theme.colors.bgWhite};
`;

export const Content = styled.View`
  flex-grow: 1;
  flex-shrink: 1;
  padding: 8px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MovieImage = styled.Image`
  height: 400px;
  width: 100%;

  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.secondary};

  font-family: 'Raleway-Bold';
  font-weight: 800;
  font-size: 18px;
`;

export const Label = styled.Text`
  color: ${({theme}) => theme.colors.primary};

  font-family: 'Raleway';
  font-weight: 500;
  font-size: 14px;
`;
