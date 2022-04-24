import React from 'react';
import {EpisodeListProps} from '../../types';
import EpisodeCard from '../EpisodeCard';

import {Container} from './styles';

const EpisodeList: React.FC<EpisodeListProps> = ({
  episodes,
  onEpisodePress,
}) => {
  return (
    <Container>
      {episodes.map((el, idx) => (
        <EpisodeCard
          key={`${idx}${el.name}`}
          item={el}
          onEpisodePress={onEpisodePress}
        />
      ))}
    </Container>
  );
};

export default EpisodeList;
