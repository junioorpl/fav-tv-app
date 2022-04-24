import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {Header} from '~/components';
import Page from '~/layouts/Page';
import {handleFetchMovieById} from '~/store/actions/movies';
import {useAppDispatch, useAppSelector} from '~/store/hooks';
import MovieFavoriteCard from './components/MovieFavoriteCard';
import {Container, SearchList} from './styles';

const Favorites: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const {favorites} = useAppSelector(state => state.movies);

  const onItemPress = useCallback(
    (id: number) => {
      dispatch(handleFetchMovieById(id));
      navigation.navigate('ShowDetails');
    },
    [navigation, dispatch],
  );

  const renderItem = useCallback(item => {
    return (
      <MovieFavoriteCard
        onPress={() => onItemPress(item.item.id)}
        item={item}
      />
    );
  }, []);

  return (
    <Page>
      <Header title="Favorites" />
      <Container>
        <SearchList
          showsVerticalScrollIndicator={false}
          data={favorites}
          keyExtractor={(_, index) => `${index}`}
          renderItem={renderItem}
        />
      </Container>
    </Page>
  );
};

export default Favorites;
