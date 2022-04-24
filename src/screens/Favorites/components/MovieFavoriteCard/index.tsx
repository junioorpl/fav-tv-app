import moment from 'moment';
import React, {useCallback} from 'react';

import {FavoriteCardProps} from '../../types';

import {Container, Content, Label, MovieImage, Title} from './styles';

const MovieFavoriteCard: React.FC<FavoriteCardProps> = ({item, onPress}) => {
  const {item: movie} = item;

  const dateToFromNowDaily = useCallback(myDate => {
    return moment(myDate).fromNow();
  }, []);

  return (
    <Container onPress={onPress}>
      <MovieImage
        source={{
          uri: movie.url,
        }}
      />
      <Content>
        <Title>{movie.name}</Title>
        <Label>added {dateToFromNowDaily(movie.addedAt)}</Label>
      </Content>
    </Container>
  );
};

export default MovieFavoriteCard;
