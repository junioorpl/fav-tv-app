import styled from 'styled-components/native';
import {SeasonContainerProps} from '../../types';

export const Container = styled.FlatList`
  margin: 4px 0;
`;

export const CharContainer = styled.Pressable`
  background: ${({theme}) => theme.colors.primary};
  margin-right: 8px;
  border-radius: 12px;
  max-width: 128px;
`;

export const Photo = styled.Image`
  height: 196px;
  width: 128px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const Content = styled.View`
  padding: 8px;
`;

export const RealName = styled.Text`
  color: white;
  font-family: 'Raleway-Bold';
  font-weight: 800;
  font-size: 16px;
`;

export const CharacterName = styled.Text`
  color: ${({theme}) => theme.colors.secondary};
  font-family: 'Raleway';
  font-weight: 500;
  font-size: 16px;
`;
