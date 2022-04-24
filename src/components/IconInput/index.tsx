import React from 'react';
import {Pressable} from 'react-native';
import {Container, Input, Label, Row} from './styles';
import {IconInputProps} from './types';

const IconInput: React.FC<IconInputProps> = ({
  icon,
  placeholder,
  label,
  onTextChange,
  onIconPress,
}) => {
  return (
    <Container>
      {!!label && <Label>{label}</Label>}
      <Row>
        <Input
          onBlur={onIconPress}
          placeholder={placeholder}
          placeholderTextColor="#FFF"
          onChangeText={onTextChange}
        />
        {!!icon && <Pressable onPress={onIconPress}>{icon}</Pressable>}
      </Row>
    </Container>
  );
};

export default IconInput;
