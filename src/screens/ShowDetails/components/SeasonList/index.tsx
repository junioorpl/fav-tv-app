import React from 'react';

import {SeasonListProps} from '../../types';
import {Container, SeasonContainer, SeasonText} from './styles';

const SeasonList: React.FC<SeasonListProps> = ({
  seasons,
  selectedSeason,
  onItemPress,
}) => {
  return (
    <Container
      data={seasons}
      keyExtractor={(_, index) => `${index}`}
      renderItem={({item}: {item: any}) => (
        <SeasonContainer
          onPress={() => onItemPress(item)}
          selected={selectedSeason === item}>
          <SeasonText
            selected={selectedSeason === item}>{`Season ${item}`}</SeasonText>
        </SeasonContainer>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default SeasonList;
