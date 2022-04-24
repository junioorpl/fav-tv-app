import styled from 'styled-components/native';
import {FlatListProps} from './types';

export const Container = styled.View`
  height: 90%;
`;

export const SearchList = styled.FlatList<FlatListProps>`
  border-radius: 8px;
`;
