import styled from 'styled-components/native';

export const Container = styled.Pressable`
  background-color: white;
  width: 100%;
  border-radius: 12px;
  flex-direction: row;
  margin-bottom: 12px;
`;

export const Content = styled.View`
  margin-left: 8px;
  flex-grow: 1;
  justify-content: space-between;
  flex-shrink: 1;
  padding: 8px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

export const MovieImage = styled.Image`
  height: 90px;
  width: 64px;

  border-bottom-left-radius: 12px;
  border-top-left-radius: 12px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.secondary};

  font-family: 'Raleway-Bold';
  font-weight: 800;
  font-size: 18px;
  flex-shrink: 1;
  flex-basis: 70%;
`;

export const SubTitle = styled.Text`
  color: ${({theme}) => theme.colors.primary};

  font-family: 'Raleway-Bold';
  font-weight: 800;
  font-size: 14px;
`;

export const Description = styled.Text`
  color: ${({theme}) => theme.colors.secondary};

  font-family: 'Raleway';
  font-weight: 500;
  font-size: 14px;
`;
