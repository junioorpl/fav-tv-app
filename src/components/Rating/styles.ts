import styled from 'styled-components/native';
import {DescriptionProps, IconProps} from './types';

export const Icon = styled.Image<IconProps>`
  height: ${({size}) => (size === 'sm' ? 12 : 18)}px;
  width: ${({size}) => (size === 'sm' ? 12 : 18)}px;
`;

export const Description = styled.Text<DescriptionProps>`
  color: ${({theme}) => theme.colors.secondary};

  font-family: 'Raleway';
  font-weight: 500;
  font-size: ${({size}) => (size === 'sm' ? 14 : 20)}px;
`;
