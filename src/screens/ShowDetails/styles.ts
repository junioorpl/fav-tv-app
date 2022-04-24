import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {height: HEIGHT, width: WIDTH} = Dimensions.get('screen');

export const Container = styled.ScrollView`
  height: ${HEIGHT}px;

  width: ${WIDTH}px;

  margin: 0 -20px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const WhiteSpace = styled.View`
  height: ${HEIGHT / 10}px;

  width: ${WIDTH}px;
`;

export const Content = styled.View`
  margin: -32px 20px;
  padding: 32px 12px;
  background-color: white;

  border-radius: 12px;
`;

export const Genres = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  margin: 8px 0;
`;

export const LoadingContainer = styled.View`
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.Image`
  height: ${WIDTH * 1.5}px;
  width: ${WIDTH}px;
  margin: -20px 0 0;

  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;
export const BackIcon = styled.Image`
  height: 32px;
  width: 32px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.secondary};
  flex-shrink: 1;

  font-family: 'Raleway-Bold';
  font-weight: 800;
  font-size: 32px;
`;

export const SubTitle = styled.Text`
  color: ${({theme}) => theme.colors.primary};

  font-family: 'Raleway';
  font-weight: 500;
  font-size: 18px;
  margin-right: 8px;
`;

export const GenreText = styled.Text`
  color: ${({theme}) => theme.colors.primary};

  font-family: 'Raleway-Bold';
  font-weight: 800;
  font-size: 14px;
  margin-right: 8px;
`;

export const Summary = styled.Text`
  color: ${({theme}) => theme.colors.secondary};

  font-family: 'Raleway';
  font-weight: 500;
  font-size: 14px;
`;
