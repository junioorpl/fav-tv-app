import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {theme} from '~/baseStyles';

import MovieSearchCard from '~/components/MovieSearchCard';
import BottomModal from '~/layouts/Modal';
import {handleFetchMovieById} from '~/store/actions/movies';
import {useAppSelector} from '~/store/hooks';
import {Title} from '../../styles';

import {PersonDetailProps} from '../../types';

import {
  Container,
  Content,
  CastImage,
  InfoBox,
  WhiteSpace,
  InfoBoxTransparent,
} from './styles';

const PersonDetails: React.FC<PersonDetailProps> = ({
  onClose,
  show,
  item: person,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {castMovies} = useAppSelector(state => state.movies);

  const handleItemPress = useCallback(
    (id: number) => {
      onClose();
      dispatch(handleFetchMovieById(id));
      navigation.navigate('ShowDetails');
    },
    [onClose, dispatch, navigation],
  );

  return (
    <BottomModal onClose={onClose} show={show}>
      <Container>
        <Content>
          <CastImage
            source={{
              uri:
                !!person?.image && !!person?.image.original
                  ? person.image.original
                  : `https://ui-avatars.com/api/?background=${theme.colors.primary}&color=${theme.colors.secondary}&name=${person?.name}`,
            }}
          />
          <InfoBox>
            <Title>{person?.name}</Title>
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

export default PersonDetails;
