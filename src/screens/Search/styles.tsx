import styled from 'styled-components/native';
import {FlatListProps} from './types';

export const Container = styled.View`
  height: 70%;
`;

export const SearchList = styled.FlatList<FlatListProps>`
  border-radius: 8px;
`;

export const SearchIcon = styled.Image`
  height: 18px;
  width: 18px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.secondary};
  flex-shrink: 1;

  font-family: 'Raleway-Bold';
  font-weight: 800;
  font-size: 32px;
`;
