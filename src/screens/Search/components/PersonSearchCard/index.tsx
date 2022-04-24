import React from 'react';

import {theme} from '~/baseStyles';
import {Rating} from '~/components';
import {SearchPersonCardProps} from '../../types';

import {Container, Content, PersonImage, Title} from './styles';

const PersonSearchCard: React.FC<SearchPersonCardProps> = ({item, onPress}) => {
  const {item: person} = item;
  return (
    <Container onPress={onPress}>
      <PersonImage
        source={{
          uri:
            !!person?.person?.image && !!person?.person?.image.medium
              ? person?.person?.image.medium
              : `https://ui-avatars.com/api/?background=${theme.colors.primary}&color=${theme.colors.secondary}&name=${person?.person?.name}`,
        }}
      />
      <Content>
        <Title>{person?.person?.name}</Title>
      </Content>
    </Container>
  );
};

export default PersonSearchCard;
