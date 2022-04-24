import React from 'react';
import {Pressable} from 'react-native';

import {Container, Title} from './styles';
import {HeaderProps} from './types';

const Header: React.FC<HeaderProps> = ({
  title,
  icon,
  iconSide,
  onIconPress,
}) => {
  return (
    <Container>
      {iconSide === 'left' && (
        <Pressable onPress={onIconPress}>{icon}</Pressable>
      )}
      {!!title && <Title>{title}</Title>}
      {iconSide === 'right' && (
        <Pressable onPress={onIconPress}>{icon}</Pressable>
      )}
    </Container>
  );
};

export default Header;
