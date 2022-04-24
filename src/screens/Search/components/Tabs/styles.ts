import styled from 'styled-components/native';
import {TabProps} from '../../types';

export const Container = styled.FlatList`
  margin: 4px 0;
  min-height: 40px;
  border-bottom-width: 1;
  border-bottom-color: ${({theme}) => theme.colors.secondary};
`;
export const TabContainer = styled.Pressable<TabProps>`
  background: ${({theme, selected}) =>
    selected ? theme.colors.secondary : 'white'};
  margin-right: 8px;
  padding: 8px;

  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const TabText = styled.Text<TabProps>`
  color: ${({theme, selected}) =>
    selected ? 'white' : theme.colors.secondary};
  font-family: 'Raleway-Bold';
  font-weight: 800;
  font-size: 16px;
`;
