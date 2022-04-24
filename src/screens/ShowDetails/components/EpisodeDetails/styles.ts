import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {height: HEIGHT, width: WIDTH} = Dimensions.get('screen');

export const Container = styled.View`
  position: absolute;
  background-color: ${({theme}) => theme.colors.primary};
  min-height: ${HEIGHT / 1.7}px;
  max-height: ${HEIGHT / 1.7}px;
  margin-left: -20px;
  width: ${WIDTH}px;
  bottom: -20px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const EpisodeImage = styled.Image`
  height: ${HEIGHT / 4}px;
  width: ${WIDTH}px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const Content = styled.View`
  max-height: ${HEIGHT / 3}px;

  border-radius: 12px;
`;

export const SummaryScroll = styled.ScrollView`
  max-height: 96px;
`;

export const InfoBox = styled.View`
  margin: -32px 20px;
  padding: 32px 12px;
  background-color: white;

  border-radius: 12px;
`;
