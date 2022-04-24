import React from 'react';
import {theme} from '~/baseStyles';
import {Rating} from '~/components';
import {EpisodeCardProps} from '../../types';

import {
  Container,
  Content,
  Description,
  EpisodeBanner,
  Name,
  Row,
} from './styles';

const EpisodeCard: React.FC<EpisodeCardProps> = ({item, onEpisodePress}) => {
  return (
    <Container onPress={() => onEpisodePress(item.id)}>
      <EpisodeBanner
        source={{
          uri:
            !!item.image && !!item.image.medium
              ? item.image.medium
              : `https://ui-avatars.com/api/?background=${theme.colors.primary}&color=${theme.colors.secondary}&name=${item.name}`,
        }}
      />
      <Content>
        <Row>
          <Name>{item.name}</Name>
          <Rating rating={item.rating.average} size="sm" type="primary" />
        </Row>
        <Row>
          <Description>{item.runtime}min</Description>
        </Row>
      </Content>
    </Container>
  );
};

export default EpisodeCard;
