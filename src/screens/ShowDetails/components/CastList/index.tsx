import React from 'react';
import {theme} from '~/baseStyles';

import {CastListProps} from '../../types';
import {
  CharacterName,
  CharContainer,
  Container,
  Content,
  Photo,
  RealName,
} from './styles';

const CastList: React.FC<CastListProps> = ({cast, onItemPress}) => {
  return (
    <Container
      data={cast}
      keyExtractor={(_, index) => `${index}`}
      renderItem={({item}: {item: any}) => (
        <CharContainer onPress={() => onItemPress(item.person.id)}>
          <Photo
            source={{
              uri:
                !!item.person.image && !!item.person.image.original
                  ? item.person.image.original
                  : `https://ui-avatars.com/api/?background=${theme.colors.primary}&color=${theme.colors.secondary}&name=${item.person.name}`,
            }}
          />
          <Content>
            <CharacterName>{item.character.name}</CharacterName>
            <RealName>{item.person.name}</RealName>
          </Content>
        </CharContainer>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default CastList;
