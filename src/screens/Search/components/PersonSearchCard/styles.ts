import styled from 'styled-components/native';

export const Container = styled.Pressable`
  width: 100%;
  flex-direction: row;
  margin: 6px 0;
  align-items: center;
  border-radius: 12px;
  background-color: ${({theme}) => theme.colors.bgWhite};
`;

export const Content = styled.View`
  flex-grow: 1;
  flex-shrink: 1;
  padding: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PersonImage = styled.Image`
  height: 50px;
  width: 32px;

  border-bottom-left-radius: 12px;
  border-top-left-radius: 12px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.secondary};

  font-family: 'Raleway-Bold';
  font-weight: 800;
  font-size: 18px;
`;
