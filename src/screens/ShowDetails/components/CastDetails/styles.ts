import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {height: HEIGHT, width: WIDTH} = Dimensions.get('screen');

export const Container = styled.View`
  position: absolute;
  background-color: ${({theme}) => theme.colors.primary};
  min-height: ${HEIGHT / 1.4}px;
  max-height: ${HEIGHT / 1.4}px;
  margin-left: -20px;
  width: ${WIDTH}px;
  bottom: -20px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const CastImage = styled.Image`
  height: ${HEIGHT / 1.7}px;
  width: ${WIDTH}px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const Content = styled.ScrollView`
  min-height: ${HEIGHT / 1.2}px;
  max-height: ${HEIGHT / 1.2}px;

  border-radius: 12px;
`;

export const InfoBox = styled.View`
  margin: -32px 20px;
  padding: 32px 12px;
  background-color: white;

  border-radius: 12px;
`;

export const InfoBoxTransparent = styled.View`
  margin: 24px 0;
  padding: 24px 20px;
`;

export const WhiteSpace = styled.View`
  height: ${HEIGHT / 6}px;

  width: ${WIDTH}px;
`;
