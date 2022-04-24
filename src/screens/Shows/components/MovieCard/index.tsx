import React from 'react';
import {IMAGES} from '~/assets';
import {theme} from '~/baseStyles';
import {Rating, ShowSchedule} from '~/components';

import {MovieCardProps} from '../../types';

import {
  Container,
  Content,
  Description,
  MovieImage,
  Row,
  SubTitle,
  Title,
} from './styles';

const MovieCard: React.FC<MovieCardProps> = ({item, onPress}) => {
  const {item: movie} = item;
  return (
    <Container onPress={onPress}>
      <MovieImage
        source={{
          uri:
            !!movie.image && !!movie.image.medium
              ? movie.image.medium
              : `https://ui-avatars.com/api/?background=${theme.colors.primary}&color=${theme.colors.secondary}&name=${movie.name}`,
        }}
      />
      <Content>
        <Row>
          <Title numberOfLines={1}>{movie.name}</Title>
          <SubTitle>{movie.genres[0]}</SubTitle>
        </Row>
        <Row>
          <Description>{movie.status}</Description>
          <Rating type="primary" size="sm" rating={movie.rating.average} />
        </Row>
        <ShowSchedule size="sm" schedule={movie.schedule} />
      </Content>
    </Container>
  );
};

export default MovieCard;
