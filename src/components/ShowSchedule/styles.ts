import styled from 'styled-components/native';
import {DayContainerTypes, TimeProps} from './types';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const DaysContainer = styled.View`
  flex-direction: row;
`;
export const DayContainer = styled.View<DayContainerTypes>`
  background-color: ${({theme, selected}) =>
    selected ? theme.colors.primary : theme.colors.bgWhite};
  align-items: center;
  justify-content: center;
  margin-right: 2px;
  height: ${({size}) => (size === 'sm' ? 18 : 24)}px;
  width: ${({size}) => (size === 'sm' ? 18 : 24)}px;
  padding: 2px;
  border-radius: 20px;
`;

export const Day = styled.Text<DayContainerTypes>`
  color: ${({theme, selected}) =>
    selected ? theme.colors.secondary : theme.colors.primary};

  font-family: 'Raleway';
  font-weight: 500;
  font-size: ${({size}) => (size === 'sm' ? 10 : 14)}px;
`;

export const Time = styled.Text<TimeProps>`
  color: ${({theme}) => theme.colors.secondary};

  font-family: 'Raleway';
  font-weight: 500;
  font-size: ${({size}) => (size === 'sm' ? 14 : 18)}px;
`;
