import React from 'react';
import {IMAGES} from '~/assets';
import {theme} from '~/baseStyles';
import {Rating} from '~/components';

import {Container, Content, MovieImage, Title} from './styles';
import {SearchMovieCardProps} from './types';

const MovieSearchCard: React.FC<SearchMovieCardProps> = ({item, onPress}) => {
  const {item: movie} = item;
  return (
    <Container onPress={onPress}>
      <MovieImage
        source={{
          uri:
            !!movie.show.image && !!movie.show.image.medium
              ? movie.show.image.medium
              : `https://ui-avatars.com/api/?background=${theme.colors.primary}&color=${theme.colors.secondary}&name=${movie.show.name}`,
        }}
      />
      <Content>
        <Title>{movie.show.name}</Title>
        <Rating type="primary" size="sm" rating={movie.show.rating.average} />
      </Content>
    </Container>
  );
};

export default MovieSearchCard;
