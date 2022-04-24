import styled from 'styled-components/native';
import {SeasonContainerProps} from '../../types';

export const Container = styled.FlatList`
  margin: 4px 0;
`;
export const SeasonContainer = styled.Pressable<SeasonContainerProps>`
  background: ${({theme, selected}) =>
    selected ? theme.colors.primary : 'white'};
  margin-right: 8px;
  padding: 8px;
  border-radius: 22px;
`;

export const SeasonText = styled.Text<SeasonContainerProps>`
  color: ${({theme, selected}) => (selected ? 'white' : theme.colors.primary)};
  font-family: 'Raleway-Bold';
  font-weight: 800;
  font-size: 16px;
`;
