import React from 'react';
import {Keyboard} from 'react-native';

import {Container} from './styles';

const Page: React.FC = ({children}) => {
  return (
    <Container onTouchStart={() => Keyboard.dismiss()}>{children}</Container>
  );
};

export default Page;
