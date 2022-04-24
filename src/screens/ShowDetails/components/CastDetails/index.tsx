import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {theme} from '~/baseStyles';
import {Rating} from '~/components';
import MovieSearchCard from '~/components/MovieSearchCard';
import BottomModal from '~/layouts/Modal';
import {handleFetchMovieById} from '~/store/actions/movies';
import {useAppSelector} from '~/store/hooks';
import {Row, SubTitle, Title} from '../../styles';
import {CastDetailsProps} from '../../types';

import {
  Container,
  Content,
  CastImage,
  InfoBox,
  WhiteSpace,
  InfoBoxTransparent,
} from './styles';

const CastDetails: React.FC<CastDetailsProps> = ({onClose, show, cast}) => {
  const dispatch = useDispatch();
  const {castMovies} = useAppSelector(state => state.movies);

  const handleItemPress = useCallback(
    (id: number) => {
      dispatch(handleFetchMovieById(id));
      onClose();
    },
    [onClose, dispatch],
  );

  return (
    <BottomModal onClose={onClose} show={show}>
      <Container>
        <Content>
          <CastImage
            source={{
              uri:
                !!cast?.person?.image && !!cast?.person?.image.original
                  ? cast?.person.image.original
                  : `https://ui-avatars.com/api/?background=${theme.colors.primary}&color=${theme.colors.secondary}&name=${cast?.person?.name}`,
            }}
          />
          <InfoBox>
            <Title>{cast?.person?.name}</Title>
            <SubTitle>{cast?.character?.name}</SubTitle>
          </InfoBox>
          <InfoBoxTransparent>
            {castMovies.map((el, idx) => (
              <MovieSearchCard
                key={idx}
                item={{item: {score: idx, show: el}}}
                onPress={() => handleItemPress(el.id)}
              />
            ))}
          </InfoBoxTransparent>
          <WhiteSpace />
        </Content>
      </Container>
    </BottomModal>
  );
};

export default CastDetails;
